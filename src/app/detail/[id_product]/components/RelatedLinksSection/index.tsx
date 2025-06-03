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
            <a href={suggestions.href} className={styles.suggestionLink} title={suggestions.label}>
              {suggestions.label}
            </a>
            {i < relatedLinks.suggestions.length - 1 && <span className={styles.separator}>-</span>}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.bottomRow}>
        <nav className={styles.breadcrumbs} role="navigation" aria-label="Breadcrumb">
          {relatedLinks.breadcrumbs.map((breadcrumbs: RelatedLinksSuggestionI, i: number) => (
            <React.Fragment key={breadcrumbs.label}>
              <a
                href={breadcrumbs.href}
                className={styles.breadcrumbLink}
                title={breadcrumbs.label}
              >
                {breadcrumbs.label}
              </a>
              {i < relatedLinks.breadcrumbs.length - 1 && (
                <span className={styles.breadcrumbSeparator}>{'>'}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <nav className={styles.actions} role="navigation" aria-label="Acciones rápidas">
          {relatedLinks.actions.map((actions: RelatedLinksSuggestionI, i: number) => (
            <React.Fragment key={actions.label}>
              <a href={actions.href} className={styles.actionLink} title={actions.label}>
                {actions.label}
              </a>
              {i < relatedLinks.actions.length - 1 && (
                <span className={styles.actionSeparator}>|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default RelatedLinksSection;
