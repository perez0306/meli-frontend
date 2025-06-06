'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Modal from '@/components/ui/modal';
import PaymentMethodsModal from '@/components/commons/paymentMethods';

const PaymentMethodsBox = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <>
      <aside className={styles.box}>
        <div className={styles.title}>Medios de pago</div>
        <div className={styles.section}>
          <div className={styles.subtitle}>Tarjetas de crédito</div>
          <div className={styles.caption}>¡Paga en hasta 48 cuotas!</div>
          <div className={styles.iconsRow}>
            <Image src="/icons/visa.svg" alt="Visa" title="Visa" width={40} height={28} />
            <Image
              src="/icons/mastercard.svg"
              alt="Mastercard"
              title="Mastercard"
              width={38}
              height={28}
            />
            <Image
              src="/icons/american.svg"
              alt="American Express"
              title="American Express"
              width={38}
              height={28}
            />
            <Image src="/icons/codensa.svg" alt="Codensa" title="Codensa" width={54} height={28} />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.subtitle}>Tarjetas de débito</div>
          <div className={styles.iconsRow}>
            <Image
              src="/icons/visa.svg"
              alt="Visa Débito"
              title="Visa Débito"
              width={40}
              height={28}
            />
            <span className={styles.debit}>DÉBITO</span>
            <Image
              src="/icons/mastercard.svg"
              alt="Mastercard Débito"
              title="Mastercard Débito"
              width={38}
              height={28}
            />
            <span className={styles.debit}>DÉBITO</span>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.subtitle}>Efectivo</div>
          <div className={styles.iconsRow}>
            <Image src="/icons/efecty.svg" alt="Efecty" title="Efecty" width={80} height={28} />
          </div>
        </div>
        <a href="#" className={styles.link} onClick={() => setOpen(true)}>
          Conoce otros medios de pago
        </a>
      </aside>
      <Modal open={open} onClose={onClose}>
        <PaymentMethodsModal />
      </Modal>
    </>
  );
};

export default PaymentMethodsBox;
