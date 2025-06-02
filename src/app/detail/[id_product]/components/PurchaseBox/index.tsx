'use client';
import React from 'react';
import Button from '@/components/ui/button';
import styles from './index.module.css';
import { BenefitI, PurchaseBoxI } from '@/types';

const PurchaseBox = ({ purchaseBox }: { purchaseBox: PurchaseBoxI }) => {

    const handleAddToCart = () => {
        const oneMonthMs = 30 * 24 * 60 * 60 * 1000; // 30 días en milisegundos
        const expiresAt = Date.now() + oneMonthMs;
        const cartItem = {
            id: "purchaseBox.id",
            quantity: 1,
            expiresAt,
        };
        localStorage.setItem("cart", JSON.stringify(cartItem));
    };

    return (
        <aside className={styles.box}>
            <div className={styles.shipping}>
                <span className={styles.freeShipping}>{purchaseBox.shipping}</span>
                <div className={styles.shippingSub}>Conoce los tiempos y las formas de envío.</div>
                <a href="#" className={styles.shippingLink}>Calcular cuándo llega</a>
            </div>
            <div className={styles.stock}>¡Última disponible!</div>
            <div className={styles.buttons}>
                <Button variant="primary" onClick={() => { }}>Comprar ahora</Button>
                <Button
                    variant="secondary"
                    onClick={handleAddToCart}
                >
                    Agregar al carrito
                </Button>
            </div>
            <div className={styles.sellerInfo}>
                Vendido por <a href={purchaseBox.seller.link} className={styles.sellerLink}>{purchaseBox.seller.name}</a>
                <br />
                <span className={styles.sellerSales}>{purchaseBox.seller.sales} ventas</span>
            </div>
            <ul className={styles.benefits}>
                {purchaseBox.benefits.map((benefit: BenefitI) => (
                    <li key={benefit.text.replace(/\s+/g, '_')}>
                        <span className={styles.icon}>{benefit.icon}</span>
                        {benefit.link
                            ? <a href={benefit.link} className={styles.benefitLink}>{benefit.text}</a>
                            : <span>{benefit.text}</span>
                        }
                        {benefit.description && ` ${benefit.description}`}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default PurchaseBox; 