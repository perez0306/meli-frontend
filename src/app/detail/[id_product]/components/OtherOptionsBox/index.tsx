import React from 'react';
import styles from './index.module.css';

const OtherOptionsBox = () => {
    return (
        <aside className={styles.box}>
            <div className={styles.title}>Otras opciones de compra</div>
            <a href="#" className={styles.link}>Ver 5 opciones desde $1.640.000</a>
        </aside>
    );
};

export default OtherOptionsBox; 