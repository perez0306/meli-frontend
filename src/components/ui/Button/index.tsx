import styles from './index.module.css';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}

export const Button = ({ children, variant = 'primary', size = 'medium' }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
            {children}
        </button>
    );
};

export default Button; 