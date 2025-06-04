'use client';
import { ProductInfoI } from '@/types';
import styles from './index.module.css';
import { postFavorite } from '@/lib/api/services';
import BestSellerTag from '@/components/ui/bestSellerTag';

const TitleDetail = ({ productInfo }: { productInfo: ProductInfoI }) => {
  const handleFavorite = async () => {
    await postFavorite('1');
  };

  return (
    <div className={styles.titleDetail}>
      <div className={styles.topRow}>
        <p className={styles.status}>{productInfo.status}</p>
        <span className={styles.separator}>|</span>
        <p className={styles.sold}>+{productInfo.sold} vendidos</p>
        <button
          onClick={() => handleFavorite()}
          className={styles.favorite}
          aria-label="Agregar a favoritos"
        >
          ♡
        </button>
      </div>
      <div className={styles.tagsRow}>
        <BestSellerTag />
        <a
          href={productInfo.rank.link}
          className={styles.rankLink}
          title={`Ranking: ${productInfo.rank.position} en ${productInfo.rank.category}`}
        >
          {productInfo.rank.position}° en {productInfo.rank.category}
        </a>
      </div>
      <h1 className={styles.title}>{productInfo.title}</h1>
      <div className={styles.ratingRow}>
        <span className={styles.ratingValue}>4.9</span>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.ratingCount}>(1021)</span>
      </div>
    </div>
  );
};

export default TitleDetail;
