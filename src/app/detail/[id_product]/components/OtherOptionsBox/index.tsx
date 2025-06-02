import React from 'react';
import styles from './index.module.css';
import { SellerBoxI } from '@/types';

const OtherOptionsBox = ({ otherOptionsBox }: { otherOptionsBox: SellerBoxI }) => {

    return (
        <aside className={styles.box}>
            <div className={styles.title}>Otras opciones de compra</div>
            <a href={otherOptionsBox.button.link} className={styles.link}>Ver {otherOptionsBox.products} opciones desde $1.640.000</a>
        </aside>
    );
};

export default OtherOptionsBox; 