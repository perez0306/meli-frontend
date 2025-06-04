// UI Components
import Carousel from '@/components/ui/carousel';
import Divider from '@/components/ui/divider';
// Styles
import styles from '../page.module.css';
// Components
import { RelatedLinksSection } from './relatedLinksSection';
import ProductInfo from './productInfo';
import PurchaseBox from './purchaseBox';
import PaymentMethodsBox from './paymentMethodsBox';
import SellerBox from './sellerBox';
import OtherOptionsBox from './otherOptionsBox';
import ProductSpecsBox from './productSpecsBox';
import ProductDescriptionBox from './productDescriptionBox';
import ImagesView from './imagesView';
import TitleDetail from '@/components/commons/titleDetail';
import ButtonColor from '@/components/commons/buttonColor';
import Price from '@/components/commons/price';
import DetailProduct from '@/components/commons/detailProduct';
// Types
import { ProductDataI } from '@/types';

export default function DetailPage({
  product,
  isMobile,
}: {
  product: ProductDataI;
  isMobile?: boolean;
}) {
  return (
    <div className={styles['detail-container']}>
      {!isMobile && <RelatedLinksSection relatedLinks={product.relatedLinks} />}
      {isMobile ? (
        <>
          <TitleDetail productInfo={product.productInfo} />
          <Carousel images={product.images} productTitle={product.productInfo.title} />
          <ButtonColor productInfo={product.productInfo} />
          <Price productInfo={product.productInfo} />
          <PurchaseBox purchaseBox={product.purchaseBox} />
          <Divider />
          <OtherOptionsBox otherOptionsBox={product.sellerBox} />
          <Divider />
          <DetailProduct productInfo={product.productInfo} />
          <Divider />
          <ProductSpecsBox specs={product.specs} />
          <Divider />
          <SellerBox sellerBox={product.sellerBox} />
          <Divider />
          <ImagesView images={product.images} />
          <Divider />
          <ProductDescriptionBox descriptionBox={product.descriptionBox} />
          <Divider />
          <PaymentMethodsBox />
        </>
      ) : (
        <div className={styles['product-section']}>
          <div>
            <div className={styles['left-col']}>
              <Carousel images={product.images} productTitle={product.productInfo.title} />
              <ProductInfo productInfo={product.productInfo} />
            </div>
            <Divider />
            <ProductSpecsBox specs={product.specs} />
            <Divider />
            <ProductDescriptionBox descriptionBox={product.descriptionBox} />
          </div>
          <div className={styles['right-col']}>
            <PurchaseBox purchaseBox={product.purchaseBox} />
            <SellerBox sellerBox={product.sellerBox} />
            <OtherOptionsBox otherOptionsBox={product.sellerBox} />
            <PaymentMethodsBox />
          </div>
        </div>
      )}
    </div>
  );
}
