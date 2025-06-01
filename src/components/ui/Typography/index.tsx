import styles from './index.module.css';
import React from 'react';

type Variant = 'h1' | 'h2' | 'body';

interface TypographyProps {
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
}

export const Typography = ({ children, variant = 'body', className = '' }: TypographyProps) => {
    const Tag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : 'span';
    return (
        <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>
    );
};

export default Typography; 