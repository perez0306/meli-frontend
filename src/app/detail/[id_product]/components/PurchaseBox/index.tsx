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
      id: 'purchaseBox.id',
      quantity: 1,
      expiresAt,
    };
    localStorage.setItem('cart', JSON.stringify(cartItem));
  };

  return (
    <aside className={styles.box}>
      <div className={styles.shipping}>
        <span className={styles.freeShipping}>{purchaseBox.shipping}</span>
        <p className={styles.shippingSub}>Conoce los tiempos y las formas de envío.</p>
        <a href="#" className={styles.shippingLink} title="Calcular cuándo llega">
          Calcular cuándo llega
        </a>
      </div>
      <div className={styles.stockBlock}>
        <p className={styles.stockTitle}>Stock disponible</p>
        <div className={styles.quantityBox}>
          <span className={styles.quantityText}>
            Cantidad: <b>1</b>
            <span className={styles.quantityUnit}>unidad</span>
            <span className={styles.arrow} aria-hidden="true" style={{ marginLeft: 6 }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3483fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
            <span className={styles.quantityAvailable}>(+{purchaseBox.stock} disponibles)</span>
          </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant="primary" onClick={() => {}}>
          Comprar ahora
        </Button>
        <Button variant="secondary" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </div>
      <div className={styles.sellerInfo}>
        Vendido por{' '}
        <a
          href={purchaseBox.seller.link}
          className={styles.sellerLink}
          title={`Ver perfil de ${purchaseBox.seller.name}`}
        >
          {purchaseBox.seller.name}
        </a>
        <br />
        <span className={styles.sellerSales}>{purchaseBox.seller.sales} ventas</span>
      </div>
      <ul className={styles.benefits}>
        {purchaseBox.benefits.map((benefit: BenefitI) => (
          <li key={benefit.text.replace(/\s+/g, '_')}>
            <span className={styles.icon}>{benefit.icon}</span>
            {benefit.link ? (
              <a href={benefit.link} className={styles.benefitLink} title={benefit.text}>
                {benefit.text}
              </a>
            ) : (
              <span>{benefit.text}</span>
            )}
            {benefit.description && ` ${benefit.description}`}
          </li>
        ))}
      </ul>
      <div className={styles.actionsBox}>
        <button className={styles.actionBtn} type="button">
          <span className={styles.actionIcon} aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3483fa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.9.9-.9-.9a5.5 5.5 0 0 0-7.8 7.8l.9.9 7.8 7.8 7.8-7.8.9-.9a5.5 5.5 0 0 0 0-7.8z"></path>
            </svg>
          </span>
          <span className={styles.actionText}>Agregar a favoritos</span>
        </button>
        <button className={styles.actionBtn} type="button">
          <span className={styles.actionIcon} aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3483fa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </span>
          <span className={styles.actionText}>Compartir</span>
        </button>
      </div>
    </aside>
  );
};

export default PurchaseBox;
