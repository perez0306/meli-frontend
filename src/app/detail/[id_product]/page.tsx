import DetailPage from './components';
import { getProduct } from '@/lib/api/services';
import { DescriptionBoxBlockI } from '@/types';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(props: {
  params: Promise<{ id_product: string }>;
}): Promise<Metadata> {
  const { id_product } = await props.params;
  const product = await getProduct(id_product);

  if (!product) {
    return { title: 'Producto no encontrado' };
  }

  const rawDescription = product.descriptionBox.blocks
    .map((block: DescriptionBoxBlockI) => `${block.subtitle}: ${block.text}`)
    .join('. ');

  let cutIndex = rawDescription.indexOf('.', 50);
  if (cutIndex === -1) cutIndex = rawDescription.length;
  const description = rawDescription.slice(0, cutIndex + 1).trim();

  return {
    title: `${product.title} | Mercado Libre`,
    description,
    keywords: product.title,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    openGraph: {
      title: product.title,
      description,
      images: [product.images[0]],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description,
      images: [product.images[0]],
    },
    other: {
      author: 'Mercado Libre',
      publisher: 'Mercado Libre',
      'product:price:amount': product.productInfo.price.toString(),
      'product:price:currency': 'ARS',
      'product:availability': 'in stock',
      'product:condition': 'new',
      'product:brand': 'Mercado Libre',
      'product:category': product.productInfo.rank.category,
      'product:rating': product.productInfo.rating.toString(),
      'product:rating_count': product.productInfo.ratingCount.toString(),
      'product:sold_count': product.productInfo.sold,
    },
    alternates: {
      canonical: `https://www.mercadolibre.com.ar/${product.id}`,
      languages: {
        es: `https://www.mercadolibre.com.ar/${product.id}`,
      },
    },
  };
}

export default async function Page(props: { params: Promise<{ id_product: string }> }) {
  const { id_product } = await props.params;
  const product = await getProduct(id_product);
  const ua = (await headers()).get('user-agent') || '';

  const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <DetailPage product={product} isMobile={isMobile} />;
}
