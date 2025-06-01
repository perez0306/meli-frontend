import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const PaymentMethodsBox = () => {
    return (
        <aside className={styles.box}>
            <div className={styles.title}>Medios de pago</div>
            <div className={styles.section}>
                <div className={styles.subtitle}>Tarjetas de crédito</div>
                <div className={styles.caption}>¡Paga en hasta 48 cuotas!</div>
                <div className={styles.iconsRow}>
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa" width={40} height={28} />
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="Mastercard" width={38} height={28} />
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" alt="American Express" width={38} height={28} />
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/f1fc5b20-f39b-11eb-a186-1134488bf456-m.svg" alt="Codensa" width={54} height={28} />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.subtitle}>Tarjetas de débito</div>
                <div className={styles.iconsRow}>
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa Débito" width={40} height={28} />
                    <span className={styles.debit}>DÉBITO</span>
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="Mastercard Débito" width={38} height={28} />
                    <span className={styles.debit}>DÉBITO</span>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.subtitle}>Efectivo</div>
                <div className={styles.iconsRow}>
                    <Image src="https://http2.mlstatic.com/storage/logos-api-admin/e5ee1d00-f39b-11eb-8e0d-6f4af49bf82e-m.svg" alt="Efecty" width={80} height={28} />
                </div>
            </div>
            <a href="#" className={styles.link}>Conoce otros medios de pago</a>
        </aside>
    );
};

export default PaymentMethodsBox; 