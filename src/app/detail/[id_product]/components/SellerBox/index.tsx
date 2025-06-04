import React from 'react';
import styles from './index.module.css';
import Button from '@/components/ui/button';
import { SellerBoxI } from '@/types';

const SellerBox = ({ sellerBox }: { sellerBox: SellerBoxI }) => {
  return (
    <aside className={styles.box}>
      <div className={styles.title}>Vendido por {sellerBox.title}</div>
      <div className={styles.products}>
        <span className={styles.productsNumber}>+{sellerBox.products}</span> productos
      </div>
      <div className={styles.reputationBar}>
        {[1, 2, 3, 4, 5].map(n => (
          <span
            key={n}
            className={styles[`rep${n}`]}
            style={{
              opacity: n === sellerBox.reputationBar ? 1 : 0.2,
            }}
          ></span>
        ))}
      </div>
      <div className={styles.metrics}>
        {sellerBox.metrics.map(metric => (
          <div className={styles.metric} key={metric.label}>
            {metric.value && <div className={styles.metricValue}>{metric.value}</div>}
            {metric.icon && (
              <div className={styles.metricIcon}>
                {metric.icon}
                {metric.check && <span className={styles.check}>✔</span>}
              </div>
            )}
            <div className={styles.metricLabel}>{metric.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.moreBtn}>
        <Button size="small" variant="secondary">
          <a href={sellerBox.button.link}>Ver más productos del vendedor</a>
        </Button>
      </div>
    </aside>
  );
};

export default SellerBox;
