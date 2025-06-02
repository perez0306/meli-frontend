import React from 'react';
import styles from './index.module.css';
import { RelatedLinksSuggestionI } from '@/types';
import { RelatedLinksI } from '@/types';

export const RelatedLinksSection = ({ relatedLinks }: { relatedLinks: RelatedLinksI }) => {

    return (
        <div className={styles.container}>
            <div className={styles.suggestions}>
                <span className={styles.suggestionsTitle}>También puede interesarte:</span>
                {relatedLinks.suggestions.map((suggestions: RelatedLinksSuggestionI, i: number) => (
                    <React.Fragment key={suggestions.label}>
                        <a href={suggestions.href} className={styles.suggestionLink}>{suggestions.label}</a>
                        {i < relatedLinks.suggestions.length - 1 && <span className={styles.separator}>-</span>}
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.breadcrumbs}>
                    {relatedLinks.breadcrumbs.map((breadcrumbs: RelatedLinksSuggestionI, i: number) => (
                        <React.Fragment key={breadcrumbs.label}>
                            <a href={breadcrumbs.href} className={styles.breadcrumbLink}>{breadcrumbs.label}</a>
                            {i < relatedLinks.breadcrumbs.length - 1 && <span className={styles.breadcrumbSeparator}>{'>'}</span>}
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.actions}>
                    {relatedLinks.actions.map((actions: RelatedLinksSuggestionI, i: number) => (
                        <React.Fragment key={actions.label}>
                            <a href={actions.href} className={styles.actionLink}>{actions.label}</a>
                            {i < relatedLinks.actions.length - 1 && <span className={styles.actionSeparator}>|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedLinksSection; 