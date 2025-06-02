'use client';
import styles from './index.module.css';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const LENS_SIZE = 180; // px
const ZOOM_SIZE = 320; // px
const ZOOM_SCALE = 1.5;

export const Carousel = ({ images }: { images: string[] }) => {
    const [selected, setSelected] = useState(0);
    const [zoom, setZoom] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, offsetX: 0, offsetY: 0, renderWidth: 0, renderHeight: 0 });
    const mainImgRef = useRef<HTMLImageElement>(null);
    const defaultImage = "https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2";

    const handleThumbHover = (idx: number) => {
        setSelected(idx);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!mainImgRef.current) return;
        const rect = mainImgRef.current.getBoundingClientRect();
        const naturalWidth = mainImgRef.current.naturalWidth;
        const naturalHeight = mainImgRef.current.naturalHeight;
        const displayWidth = rect.width;
        const displayHeight = rect.height;

        // Calcular el área visible de la imagen (por object-fit: contain)
        let imgAspect = naturalWidth / naturalHeight;
        let boxAspect = displayWidth / displayHeight;
        let renderWidth = displayWidth;
        let renderHeight = displayHeight;
        let offsetX = 0;
        let offsetY = 0;
        if (imgAspect > boxAspect) {
            renderWidth = displayWidth;
            renderHeight = displayWidth / imgAspect;
            offsetY = (displayHeight - renderHeight) / 2;
        } else {
            renderHeight = displayHeight;
            renderWidth = displayHeight * imgAspect;
            offsetX = (displayWidth - renderWidth) / 2;
        }

        // Coordenadas relativas dentro de la imagen renderizada
        let x = e.clientX - rect.left - offsetX;
        let y = e.clientY - rect.top - offsetY;
        // Limitar la lupa dentro de la imagen renderizada
        x = Math.max(LENS_SIZE / 2, Math.min(renderWidth - LENS_SIZE / 2, x));
        y = Math.max(LENS_SIZE / 2, Math.min(renderHeight - LENS_SIZE / 2, y));
        // Guardar la posición de la lupa relativa a la imagen renderizada
        setZoomPos({ x, y, offsetX, offsetY, renderWidth, renderHeight });
    };

    // Cálculo para el zoomBox
    let zoomImgStyle = {};
    let zoomImgWidth = 150;
    let zoomImgHeight = 200;
    if (mainImgRef.current && zoomPos.renderWidth && zoomPos.renderHeight) {
        const renderWidth = zoomPos.renderWidth;
        const renderHeight = zoomPos.renderHeight;
        // Proporción respecto a la imagen renderizada
        const percX = zoomPos.x / renderWidth;
        const percY = zoomPos.y / renderHeight;
        // Tamaño de la imagen en el zoomBox
        const zoomWidth = renderWidth * ZOOM_SCALE;
        const zoomHeight = renderHeight * ZOOM_SCALE;
        // Offset para centrar la lupa
        const transX = percX * zoomWidth - ZOOM_SIZE / 2;
        const transY = percY * zoomHeight - ZOOM_SIZE / 2;
        zoomImgStyle = {
            transform: `translate(-${transX}px, -${transY}px)`
        };
        zoomImgWidth = zoomWidth;
        zoomImgHeight = zoomHeight;
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.thumbnails}>
                {images.map((img, idx) => (
                    <Image
                        key={img}
                        src={img}
                        width={56}
                        height={56}
                        className={idx === selected ? styles.selected : styles.thumbnail}
                        onMouseEnter={() => handleThumbHover(idx)}
                        alt={`thumbnail-${img.split('com/')?.[1] || ''}`}
                    />
                ))}
            </div>
            <div
                className={styles.mainImage}
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
                onMouseMove={handleMouseMove}
                style={{ position: 'relative' }}
            >
                <Image
                    ref={mainImgRef as any}
                    src={images[selected] || defaultImage}
                    alt={`main-${selected}`}
                    width={320}
                    height={480}
                    style={{ objectFit: 'contain', cursor: 'zoom-in' }}
                />
                {zoom && zoomPos.renderWidth && zoomPos.renderHeight && (
                    <>
                        {/* Lupa */}
                        <div
                            className={styles.lens}
                            style={{
                                width: LENS_SIZE,
                                height: LENS_SIZE,
                                left: zoomPos.x + zoomPos.offsetX - LENS_SIZE / 2,
                                top: zoomPos.y + zoomPos.offsetY - LENS_SIZE / 2,
                            }}
                        />
                        {/* Zoom */}
                        <div className={styles.zoomBox} style={{ width: ZOOM_SIZE, height: ZOOM_SIZE }}>
                            <Image
                                src={images[selected] || defaultImage}
                                alt="zoom"
                                width={zoomImgWidth}
                                height={zoomImgHeight}
                                style={zoomImgStyle}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Carousel; 