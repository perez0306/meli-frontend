import styles from './index.module.css';
import React from 'react';

const BEST_SELLER_URL = 'https://www.mercadolibre.com.co/mas-vendidos/MCO1055';

export const BestSellerTag = () => {
    return (
        <a
            href={BEST_SELLER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tag}
        >
            MÁS VENDIDO
        </a>
    );
};

export default BestSellerTag; 