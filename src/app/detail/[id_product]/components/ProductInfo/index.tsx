import React from 'react';
import BestSellerTag from '@/components/ui/BestSellerTag';
import styles from './index.module.css';

const ProductInfo = () => {
    return (
        <section className={styles.infoBox}>
            <div className={styles.topRow}>
                <span className={styles.status}>Nuevo</span>
                <span className={styles.separator}>|</span>
                <span className={styles.sold}>+1000 vendidos</span>
                <button className={styles.favorite} aria-label="Agregar a favoritos">♡</button>
            </div>
            <div className={styles.tagsRow}>
                <BestSellerTag />
                <a href="#" className={styles.rankLink}>15° en Celulares y Smartphones Samsung</a>
            </div>
            <h1 className={styles.title}>Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM</h1>
            <div className={styles.ratingRow}>
                <span className={styles.rating}>4.9</span>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.ratingCount}>(1021)</span>
            </div>
            <div className={styles.priceRow}>
                <span className={styles.price}>$ 1.720.000</span>
                <p className={styles.installments}>en <span className={styles.installmentsHighlight}>3 cuotas de $ 573.333 con 0% interés</span></p>
            </div>
            <a href="#" className={styles.paymentLink}>Ver los medios de pago</a>
            <div className={styles.colorRow}>
                <span>Color: <b>Azul oscuro</b></span>
                <div className={styles.variants}>
                    <button className={`${styles.variant} ${styles.selected}`}></button>
                    <button className={styles.variant}></button>
                </div>
            </div>
            <div className={styles.featuresBox}>
                <div className={styles.featuresTitle}>Lo que tienes que saber de este producto</div>
                <ul className={styles.featuresList}>
                    <li>Memoria RAM: 8 GB</li>
                    <li>Dispositivo desbloqueado para que elijas tu compañía telefónica preferida.</li>
                    <li>Memoria interna de 256 GB.</li>
                </ul>
                <a href="#" className={styles.link}>Ver características</a>
            </div>
            <div className={styles.buyOptions}>
                <span>Opciones de compra:</span>
                <br />
                <br />
                <a href="#" className={styles.link}>4 productos nuevos desde $1.720.000</a>
            </div>
        </section>
    );
};

export default ProductInfo; 