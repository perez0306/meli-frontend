import { render, screen } from '@testing-library/react';
import RelatedLinksSection from '@/app/detail/[id_product]/components/relatedLinksSection';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('RelatedLinksSection', () => {
  const mockRelatedLinks = data.relatedLinks;

  it('renderiza sugerencias, breadcrumbs y acciones', () => {
    render(<RelatedLinksSection relatedLinks={mockRelatedLinks} />);
    mockRelatedLinks.suggestions.forEach(s => {
      expect(screen.getByText(s.label)).toBeInTheDocument();
    });
    mockRelatedLinks.breadcrumbs.forEach(b => {
      expect(screen.getByText(b.label)).toBeInTheDocument();
    });
    mockRelatedLinks.actions.forEach(a => {
      expect(screen.getByText(a.label)).toBeInTheDocument();
    });
  });
});
