import { ProductInfoI } from '@/types';
import styles from './index.module.css';

const Price = ({ productInfo }: { productInfo: ProductInfoI }) => {
  return (
    <>
      <div className={styles.priceRow}>
        <span className={styles.price}>{productInfo.priceFormatted}</span>
        <p className={styles.installments}>
          en{' '}
          <span className={styles.installmentsHighlight}>
            {productInfo.installments} cuotas de ${productInfo.installmentsInfo} con{' '}
            {productInfo.installment}% interés
          </span>
        </p>
      </div>
      <a href="#" className={styles.paymentLink} title="Ver los medios de pago">
        Ver los medios de pago
      </a>
    </>
  );
};

export default Price;
