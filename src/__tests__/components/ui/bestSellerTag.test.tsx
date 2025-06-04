import { render, screen } from '@testing-library/react';
import BestSellerTag from '@/components/ui/bestSellerTag';
import React from 'react';

describe('BestSellerTag', () => {
  it('renderiza el texto y el link correctamente', () => {
    render(<BestSellerTag />);
    const link = screen.getByRole('link', { name: /más vendido/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining('mercadolibre.com.co/mas-vendidos')
    );
  });
});
