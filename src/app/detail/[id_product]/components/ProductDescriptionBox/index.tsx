import React from 'react';
import styles from './index.module.css';
import { DescriptionBoxBlockI } from '@/types';
import { DescriptionBoxI } from '@/types';

const ProductDescriptionBox = ({ descriptionBox }: { descriptionBox: DescriptionBoxI }) => {

    return (
        <section className={styles.descriptionBox}>
            <h2 className={styles.title}>{descriptionBox.title}</h2>
            {descriptionBox.blocks.map((block: DescriptionBoxBlockI) => (
                <div className={styles.block} key={block.subtitle.replace(/\s+/g, '-')}>
                    <div className={styles.subtitle}>{block.subtitle}</div>
                    <p className={styles.text}>{block.text}</p>
                </div>
            ))}
        </section>
    );
};

export default ProductDescriptionBox; 