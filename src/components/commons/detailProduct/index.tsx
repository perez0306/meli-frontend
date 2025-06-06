import { ProductInfoI } from '@/types';
import styles from './index.module.css';

const DetailProduct = ({ productInfo }: { productInfo: ProductInfoI }) => {
  return (
    <div className={styles.featuresBox}>
      <div className={styles.featuresTitle}>Lo que tienes que saber de este producto</div>
      <ul className={styles.featuresList}>
        {productInfo.features.map((feature: string, index: number) => (
          <li className={styles.featureItem} key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#detail-product" className={styles.link} title="Ver características">
        Ver características
      </a>
    </div>
  );
};

export default DetailProduct;
