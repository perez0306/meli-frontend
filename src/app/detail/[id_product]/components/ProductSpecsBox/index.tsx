import React from 'react';
import styles from './index.module.css';
import { FaMobileAlt, FaMicrochip, FaCamera, FaWifi, FaUserCircle, FaFingerprint } from 'react-icons/fa';
import Image from 'next/image';

const ProductSpecsBox = () => {
    return (
        <section className={styles.specsBox}>
            <h2 className={styles.title}>Características del producto</h2>
            <div className={styles.grid}>
                <div className={styles.rowPrincipal}>
                    <span className={styles.iconCircle}>
                        <Image src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/cellphone_size_v3.svg" alt="Pantalla" width={32} height={32} />
                    </span>
                    <div>
                        <div className={styles.label}>Tamaño de la pantalla: <b>6.6 "</b></div>
                        <div className={styles.subLabel}>(16.11 cm x 7.74 cm x 8.2 mm)</div>
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
                <div className={styles.row}>
                    <span className={styles.iconCircle}>
                        <Image src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/internal_memory.svg" alt="Memoria" width={32} height={32} />
                    </span>
                    <div className={styles.label}>Memoria interna: <b>256 GB</b></div>
                </div>
                <div className={styles.row}>
                    <span className={styles.iconCircle}>
                        <Image src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/resolution_front_camera.svg" alt="Cámara frontal" width={32} height={32} />
                    </span>
                    <div className={styles.label}>Cámara frontal principal: <b>32 Mpx</b></div>
                </div>
                <div className={styles.row}>
                    <span className={styles.iconCircle}>
                        <Image src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/resolution_rear_camera.svg" alt="Cámara trasera" width={32} height={32} />
                    </span>
                    <div className={styles.label}>Cámara trasera principal: <b>50 Mpx</b></div>
                </div>
                <div className={styles.row}>
                    <span className={styles.iconCircle}>
                        <Image src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/fingerprint.svg" alt="Desbloqueo" width={32} height={32} />
                    </span>
                    <div className={styles.label}>Desbloqueo: <b>Huella dactilar y reconocimiento facial</b></div>
                </div>
                <div className={styles.row}>
                    <span className={styles.iconCircle}>
                        <Image src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/nfc.svg" alt="NFC" width={32} height={32} />
                    </span>
                    <div className={styles.label}>Con NFC: <b>Sí</b></div>
                </div>
            </div>
        </section>
    );
};

export default ProductSpecsBox; 