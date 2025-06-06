'use client';
import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import { SpecsI } from '@/types';

const ProductSpecsBox = ({ specs }: { specs: SpecsI[] }) => {
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    function handleHashChange() {
      if (window.location.hash === '#detail-product' && detailRef.current) {
        const element = detailRef.current;
        const targetY = element.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const duration = 2000;
        const startTime = performance.now();

        function easeInOutCubic(t: number) {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animateScroll(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutCubic(progress);

          window.scrollTo(0, startY + (targetY - startY) * eased);

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        }

        requestAnimationFrame(animateScroll);
      }
    }

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section ref={detailRef} className={styles.specsBox}>
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
