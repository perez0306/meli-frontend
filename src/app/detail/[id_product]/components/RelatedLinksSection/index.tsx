import React from 'react';
import { RelatedLinksSectionProps } from '@/types';
import styles from './index.module.css';

export const RelatedLinksSection = ({ suggestions, breadcrumbs, actions }: RelatedLinksSectionProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.suggestions}>
                <span className={styles.suggestionsTitle}>También puede interesarte:</span>
                {suggestions.map((s, i) => (
                    <React.Fragment key={s.label}>
                        <a href={s.href} className={styles.suggestionLink}>{s.label}</a>
                        {i < suggestions.length - 1 && <span className={styles.separator}>-</span>}
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.breadcrumbs}>
                    {breadcrumbs.map((b, i) => (
                        <React.Fragment key={b.label}>
                            <a href={b.href} className={styles.breadcrumbLink}>{b.label}</a>
                            {i < breadcrumbs.length - 1 && <span className={styles.breadcrumbSeparator}>{'>'}</span>}
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.actions}>
                    {actions.map((a, i) => (
                        <React.Fragment key={a.label}>
                            <a href={a.href} className={styles.actionLink}>{a.label}</a>
                            {i < actions.length - 1 && <span className={styles.actionSeparator}>|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedLinksSection; 