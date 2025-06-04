import React from 'react';
import styles from './index.module.css';
import { ProductInfoI } from '@/types';
import TitleDetail from '@/components/commons/titleDetail';
import ButtonColor from '@/components/commons/buttonColor';
import Price from '@/components/commons/price';
import DetailProduct from '@/components/commons/detailProduct';

const ProductInfo = ({ productInfo }: { productInfo: ProductInfoI }) => {
  return (
    <section className={styles.infoBox}>
      <TitleDetail productInfo={productInfo} />
      <Price productInfo={productInfo} />
      <ButtonColor productInfo={productInfo} />
      <DetailProduct productInfo={productInfo} />
      <div className={styles.buyOptions}>
        <span>Opciones de compra:</span>
        <br />
        <br />
        <a
          href={productInfo.buyOptionsLink}
          className={styles.link}
          title={`Ver ${productInfo.buyOptions} productos nuevos desde ${productInfo.priceFormatted}`}
        >
          {productInfo.buyOptions} productos nuevos desde {productInfo.priceFormatted}
        </a>
      </div>
    </section>
  );
};

export default ProductInfo;
