import styles from './index.module.css';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  ariaLabel?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
