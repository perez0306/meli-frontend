'use client';
import React from 'react';
import BestSellerTag from '@/components/ui/bestSellerTag';
import styles from './index.module.css';
import { ProductInfoI } from '@/types';
import { postFavorite } from '@/lib/api/services';

const ProductInfo = ({ productInfo }: { productInfo: ProductInfoI }) => {

    const handleFavorite = async () => {
        await postFavorite("1");
    };
    
    return (
        <section className={styles.infoBox}>
            <div className={styles.topRow}>
                <span className={styles.status}>{productInfo.status}</span>
                <span className={styles.separator}>|</span>
                <span className={styles.sold}>+{productInfo.sold} vendidos</span>
                <button onClick={() => handleFavorite()} className={styles.favorite} aria-label="Agregar a favoritos">♡</button>
            </div>
            <div className={styles.tagsRow}>
                <BestSellerTag />
                <a href={productInfo.rank.link} className={styles.rankLink}>{productInfo.rank.position}° en {productInfo.rank.category}</a>
            </div>
            <h1 className={styles.title}>{productInfo.title}</h1>
            <div className={styles.ratingRow}>
                <span className={styles.rating}>{productInfo.rating}</span>
                <span className={styles.stars}>{productInfo.stars}</span>
                <span className={styles.ratingCount}>({productInfo.ratingCount})</span>
            </div>
            <div className={styles.priceRow}>
                <span className={styles.price}>{productInfo.priceFormatted}</span>
                <p className={styles.installments}>en <span className={styles.installmentsHighlight}>{productInfo.installments} cuotas de ${productInfo.installmentsInfo} con {productInfo.installment}% interés</span></p>
            </div>
            <a href="#" className={styles.paymentLink}>Ver los medios de pago</a>
            <div className={styles.colorRow}>
                <span>Color: <b>{productInfo.color}</b></span>
                <div className={styles.variants}>
                    {productInfo.colorVariants.map((variant) => (
                        <button key={variant.name} className={`${styles.variant} ${variant.selected ? styles.selected : ''}`} style={{ backgroundColor: variant.hex }}></button>
                    ))}
                </div>
            </div>
            <div className={styles.featuresBox}>
                <div className={styles.featuresTitle}>Lo que tienes que saber de este producto</div>
                <ul className={styles.featuresList}>
                    {productInfo.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <a href={productInfo.featuresLink} className={styles.link}>Ver características</a>
            </div>
            <div className={styles.buyOptions}>
                <span>Opciones de compra:</span>
                <br />
                <br />
                <a href={productInfo.buyOptionsLink} className={styles.link}>{productInfo.buyOptions} productos nuevos desde {productInfo.priceFormatted}</a>
            </div>
        </section>
    );
};

export default ProductInfo; 