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
// Types
import { ProductDataI } from '@/types';

export default function DetailPage({ product }: { product: ProductDataI }) {

    return (
        <div className={styles['detail-container']}>
            <RelatedLinksSection relatedLinks={product.relatedLinks} />
            <div className={styles['product-section']}>
                <div>
                    <div className={styles['left-col']}>
                        <Carousel images={product.images} />
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
        </div>
    );
}
