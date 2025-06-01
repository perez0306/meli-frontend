import React from 'react';
import styles from './index.module.css';

const ProductDescriptionBox = () => {
    return (
        <section className={styles.descriptionBox}>
            <h2 className={styles.title}>Descripción</h2>
            <div className={styles.block}>
                <div className={styles.subtitle}>Capacidad y eficiencia</div>
                <p className={styles.text}>
                    Con su potente procesador y 8 GB de RAM, su computadora logrará un alto rendimiento con una alta velocidad de transmisión de contenido y ejecutará varias aplicaciones al mismo tiempo, sin demoras.
                </p>
            </div>
            <div className={styles.block}>
                <div className={styles.subtitle}>Capacidad de almacenamiento ilimitada</div>
                <p className={styles.text}>
                    Olvídate de borrar. Con su memoria interna de 256 GB puedes descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y vídeos favoritos para reproducirlos cuando quieras.
                </p>
            </div>
        </section>
    );
};

export default ProductDescriptionBox; 