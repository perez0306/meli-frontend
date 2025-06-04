import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import { SpecsI } from '@/types';

const ProductSpecsBox = ({ specs }: { specs: SpecsI[] }) => {
  return (
    <section className={styles.specsBox}>
      <h2 className={styles.title}>Características del producto</h2>
      <div className={styles.grid}>
        {specs.map((spec: SpecsI) =>
          spec?.value ? (
            <div key={spec.label} className={styles.row}>
              <span className={styles.iconCircle}>
                <Image src={spec.icon} alt={spec.label} title={spec.label} width={32} height={32} />
              </span>
              <div className={styles.label}>
                {spec.label}: <b>{spec.value}</b>
              </div>
            </div>
          ) : (
            <div key={spec.label} className={styles.rowPrincipal}>
              <span className={styles.iconCircle}>
                <Image src={spec.icon} alt={spec.label} title={spec.label} width={32} height={32} />
              </span>
              <div className={styles.rowPrincipalContent}>
                <div className={styles.label}>
                  {spec.label}: <b>{spec.size}</b>
                </div>
                <div className={styles.subLabel}>({spec.dimensions})</div>
                <div className={styles.barWrapper}>
                  <div className={styles.barBg}>
                    <div className={styles.barFill}></div>
                  </div>
                  <div className={styles.barLabels}>
                    <span>PEQUEÑO</span>
                    <span>GRANDE</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductSpecsBox;
