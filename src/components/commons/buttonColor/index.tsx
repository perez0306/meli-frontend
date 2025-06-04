import styles from './index.module.css';
import { ProductInfoI } from '@/types';

const ButtonColor = ({ productInfo }: { productInfo: ProductInfoI }) => {
  return (
    <div className={styles.colorRow}>
      <span>
        Color: <b>{productInfo.color}</b>
      </span>
      <div className={styles.variants}>
        {productInfo.colorVariants.map(variant => (
          <button
            key={variant.name}
            className={`${styles.variant} ${variant.selected ? styles.selected : ''}`}
            style={{ backgroundColor: variant.hex }}
            aria-label={`Seleccionar color ${variant.name}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ButtonColor;
