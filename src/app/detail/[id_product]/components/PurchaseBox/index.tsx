import React from 'react';
import Button from '@/components/ui/Button';
import styles from './index.module.css';

const PurchaseBox = () => {
    return (
        <aside className={styles.box}>
            <div className={styles.shipping}>
                <span className={styles.freeShipping}>Envío gratis</span> a todo el país
                <div className={styles.shippingSub}>Conoce los tiempos y las formas de envío.</div>
                <a href="#" className={styles.shippingLink}>Calcular cuándo llega</a>
            </div>
            <div className={styles.stock}>¡Última disponible!</div>
            <div className={styles.buttons}>
                <Button variant="primary">Comprar ahora</Button>
                <Button variant="secondary">Agregar al carrito</Button>
            </div>
            <div className={styles.sellerInfo}>
                Vendido por <a href="#" className={styles.sellerLink}>MAXTECHNOLOGY</a>
                <br />
                <span className={styles.sellerSales}>+1000 ventas</span>
            </div>
            <ul className={styles.benefits}>
                <li><span className={styles.icon}>↩️</span> <a href="#" className={styles.benefitLink}>Devolución gratis.</a> Tienes 30 días desde que lo recibes.</li>
                <li><span className={styles.icon}>🛡️</span> <a href="#" className={styles.benefitLink}>Compra Protegida</a>, recibe el producto que esperabas o te devolvemos tu dinero.</li>
                <li><span className={styles.icon}>🏅</span> 12 meses de garantía de fábrica.</li>
            </ul>
        </aside>
    );
};

export default PurchaseBox; 