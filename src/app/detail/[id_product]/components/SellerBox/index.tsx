import React from 'react';
import styles from './index.module.css';
import Button from '@/components/ui/Button';

const SellerBox = () => {
    return (
        <aside className={styles.box}>
            <div className={styles.title}>Vendido por JNARVAEZ72</div>
            <div className={styles.products}><b>+5 </b>Productos</div>
            <div className={styles.reputationBar}>
                <span className={styles.rep1}></span>
                <span className={styles.rep2}></span>
                <span className={styles.rep3}></span>
                <span className={styles.rep4}></span>
                <span className={styles.rep5}></span>
            </div>
            <div className={styles.metrics}>
                <div className={styles.metric}><div className={styles.metricValue}>+100</div><div className={styles.metricLabel}>Ventas concretadas</div></div>
                <div className={styles.metric}><div className={styles.metricIcon}>💬<span className={styles.check}>✔</span></div><div className={styles.metricLabel}>Brinda buena atención</div></div>
                <div className={styles.metric}><div className={styles.metricIcon}>⏱️<span className={styles.check}>✔</span></div><div className={styles.metricLabel}>Entrega sus productos a tiempo</div></div>
            </div>
            <Button size='small' variant='secondary'>Ver más productos del vendedor</Button>
        </aside>
    );
};

export default SellerBox; 