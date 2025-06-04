import Image from 'next/image';
import styles from './index.module.css';

const ImagesView = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.imagesView}>
      <h3 className={styles.title}>Imágenes del producto</h3>
      <div className={styles.imagesViewContainer}>
        {images.map(image => (
          <div key={image} className={styles.imageViewContainer}>
            <Image src={image} alt={image} title={image} fill className={styles.imageView} />
          </div>
        ))}
      </div>
      <button className={styles.seeMoreImages} type="button">
        <span>Ver más imágenes</span>
        <span className={styles.arrow} aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3483fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ImagesView;
