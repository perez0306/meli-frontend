import { RelatedLinksSection } from './components/RelatedLinksSection';
import Carousel from '@/components/ui/Carousel';
import ProductInfo from './components/ProductInfo';
import PurchaseBox from './components/PurchaseBox';
import PaymentMethodsBox from './components/PaymentMethodsBox';
import SellerBox from './components/SellerBox';
import OtherOptionsBox from './components/OtherOptionsBox';
import ProductSpecsBox from './components/ProductSpecsBox';
import styles from './page.module.css';
import Divider from '@/components/ui/Divider';
import ProductDescriptionBox from './components/ProductDescriptionBox';

const images = [
    '/imagen.webp',
    '/imagen2.webp',
    '/imagen.jpeg',
];

export default function DetailPage() {
    return (
        <div className={styles['detail-container']}>
            <RelatedLinksSection
                suggestions={[
                    { label: 'celulares de 1 millon', href: '#' },
                    { label: 'celulares samsung', href: '#' },
                    { label: 'samsung galaxy', href: '#' },
                    { label: 'samsung s23 ultra', href: '#' },
                    { label: 'samsung galaxy s19', href: '#' },
                    { label: 'xiaomi', href: '#' },
                ]}
                breadcrumbs={[
                    { label: 'Volver al listado', href: '#' },
                    { label: 'Celulares y Teléfonos', href: '#' },
                    { label: 'Celulares y Smartphones', href: '#' },
                    { label: 'Samsung Galaxy', href: '#' },
                ]}
                actions={[
                    { label: 'Vender uno igual', href: '#' },
                    { label: 'Compartir', href: '#' },
                ]}
            />
            <div className={styles['product-section']}>
                <div>
                    <div className={styles['left-col']}>
                        <Carousel images={images} />
                        <ProductInfo />
                    </div>
                    <Divider />
                    <ProductSpecsBox />
                    <Divider />
                    <ProductDescriptionBox />
                </div>
                <div className={styles['right-col']}>
                    <PurchaseBox />
                    <SellerBox />
                    <OtherOptionsBox />
                    <PaymentMethodsBox />
                </div>
            </div>
        </div>
    );
}
