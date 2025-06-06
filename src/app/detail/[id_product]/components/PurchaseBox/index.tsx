'use client';
import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/ui/button';
import styles from './index.module.css';
import { BenefitI, PurchaseBoxI } from '@/types';
import MenuOptions from '@/components/ui/dropdown';
import { arrowIcon, favoriteIcon, shareIcon } from '@/components/ui/icons';

const PurchaseBox = ({ purchaseBox }: { purchaseBox: PurchaseBoxI }) => {
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const quantityRef = useRef<HTMLParagraphElement>(null);

  const maxOptions = Math.min(Number(purchaseBox.stock), 6);
  const options = Array.from({ length: maxOptions }, (_, i) => ({
    label: `${i + 1} ${i + 1 === 1 ? 'unidad' : 'unidades'}`,
    value: i + 1,
  }));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (quantityRef.current && !quantityRef.current.contains(event.target as Node)) {
        setQuantityOpen(false);
      }
    }
    if (quantityOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [quantityOpen]);

  const handleAddToCart = () => {
    const oneMonthMs = 30 * 24 * 60 * 60 * 1000; // 30 días en milisegundos
    const expiresAt = Date.now() + oneMonthMs;
    const cartItem = {
      id: 'purchaseBox.id',
      quantity: selectedQuantity,
      expiresAt,
    };
    localStorage.setItem('cart', JSON.stringify(cartItem));
  };

  const handleQuantityChange = (val: number) => {
    setSelectedQuantity(val);
    setQuantityOpen(false);
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
        <div className={styles.quantityBox} style={{ position: 'relative' }}>
          <p
            className={styles.quantityText}
            tabIndex={0}
            ref={quantityRef}
            onClick={() => setQuantityOpen(open => !open)}
            style={{ cursor: 'pointer' }}
          >
            Cantidad:
            <b>
              {selectedQuantity} {selectedQuantity === 1 ? 'unidad' : 'unidades'}
            </b>
            <span className={styles.arrow} aria-hidden="true" style={{ marginLeft: 6 }}>
              {arrowIcon()}
            </span>
            <span className={styles.quantityAvailable}>(+{purchaseBox.stock} disponibles)</span>
          </p>
          <MenuOptions
            open={quantityOpen}
            options={options}
            selected={selectedQuantity}
            onSelect={handleQuantityChange}
            onClose={() => setQuantityOpen(false)}
            anchorRef={quantityRef}
          />
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
          <li key={benefit.text}>
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
            {favoriteIcon()}
          </span>
          <span className={styles.actionText}>Agregar a favoritos</span>
        </button>
        <button className={styles.actionBtn} type="button">
          <span className={styles.actionIcon} aria-hidden="true">
            {shareIcon()}
          </span>
          <span className={styles.actionText}>Compartir</span>
        </button>
      </div>
    </aside>
  );
};

export default PurchaseBox;
