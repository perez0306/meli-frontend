'use client';
import { useState } from 'react';
import { ProductInfoI } from '@/types';
import Modal from '@/components/ui/modal';
import PaymentMethodsModal from '../paymentMethods';
import styles from './index.module.css';

const Price = ({ productInfo }: { productInfo: ProductInfoI }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className={styles.priceRow}>
        <p className={styles.price}>{productInfo?.priceFormatted || '0'}</p>
        <p className={styles.installments}>
          en{' '}
          <span className={styles.installmentsHighlight}>
            {productInfo?.installments} cuotas de ${productInfo?.installmentsInfo} con{' '}
            {productInfo?.installment}% interés
          </span>
        </p>
      </div>
      <a
        href="#"
        className={styles.paymentLink}
        title="Ver los medios de pago"
        onClick={() => setOpen(true)}
      >
        Ver los medios de pago
      </a>
      <Modal open={open} onClose={onClose}>
        <PaymentMethodsModal />
      </Modal>
    </>
  );
};

export default Price;
