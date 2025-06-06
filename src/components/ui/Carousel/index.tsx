'use client';
import styles from './index.module.css';
import React, { useState, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

const LENS_SIZE = 180; // px
const ZOOM_SIZE = 420; // px
const ZOOM_SCALE = 1.5;

export const Carousel = ({ images, productTitle }: { images: string[]; productTitle?: string }) => {
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    renderWidth: 0,
    renderHeight: 0,
  });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');
  const defaultImage = '/imagen.webp';

  const handleChangeImage = (idx: number) => {
    setFade(true);
    setTimeout(() => {
      setSelected(idx);
      setFade(false);
    }, 400);
  };

  const handleThumbHover = (idx: number) => {
    handleChangeImage(idx);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!mainImgRef.current) return;
    const rect = mainImgRef.current.getBoundingClientRect();
    const naturalWidth = mainImgRef.current.naturalWidth;
    const naturalHeight = mainImgRef.current.naturalHeight;
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    // Calcular el área visible de la imagen (por object-fit: contain)
    const imgAspect = naturalWidth / naturalHeight;
    const boxAspect = displayWidth / displayHeight;
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

    // Permite llegar a los bordes reales de la imagen renderizada
    x = Math.max(0, Math.min(renderWidth, x));
    y = Math.max(0, Math.min(renderHeight, y));
    setZoomPos({ x, y, offsetX, offsetY, renderWidth, renderHeight });
  };

  // Cálculo para el zoomBox
  let zoomImgStyle = {};
  let zoomImgWidth = 150;
  let zoomImgHeight = 300;
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
    const maxTransX = zoomWidth - ZOOM_SIZE;
    const maxTransY = zoomHeight - ZOOM_SIZE;
    const safeTransX = Math.max(0, Math.min(transX, maxTransX));
    const safeTransY = Math.max(0, Math.min(transY, maxTransY));
    zoomImgStyle = {
      transform: `translate(-${safeTransX}px, -${safeTransY}px)`,
    };
    zoomImgWidth = zoomWidth;
    zoomImgHeight = zoomHeight;
  }

  // Swipe handlers solo para mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance && selected < images.length - 1) {
      handleChangeImage(selected + 1);
    } else if (distance < -minSwipeDistance && selected > 0) {
      handleChangeImage(selected - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

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
            title={productTitle ? `${productTitle} miniatura ${idx + 1}` : `Miniatura ${idx + 1}`}
          />
        ))}
      </div>
      <div
        className={styles.mainImage}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ position: 'relative' }}
      >
        {/* Indicador de imagen */}
        <span className={styles.imageIndicator}>
          {selected + 1} / {images.length}
        </span>
        <Image
          ref={mainImgRef as any}
          src={images[selected] || defaultImage}
          alt={`main-${selected}`}
          title={productTitle ? `${productTitle} imagen principal` : `Imagen principal`}
          width={320}
          height={480}
          style={{ objectFit: 'contain', cursor: 'zoom-in' }}
          className={fade ? styles.fadeOut : ''}
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
                title={productTitle ? `${productTitle} zoom` : `Zoom imagen`}
                width={zoomImgWidth}
                height={zoomImgHeight}
                style={zoomImgStyle}
                className={fade ? styles.fadeOut : ''}
              />
            </div>
          </>
        )}
      </div>
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ver imagen ${idx + 1}`}
            onClick={() => handleChangeImage(idx)}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: idx === selected ? '#3483fa' : '#e0e0e0',
              display: 'inline-block',
              margin: '0 4px',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
