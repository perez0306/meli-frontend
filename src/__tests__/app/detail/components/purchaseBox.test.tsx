import { render, screen } from '@testing-library/react';
import PurchaseBox from '@/app/detail/[id_product]/components/purchaseBox';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('PurchaseBox', () => {
  const mockPurchaseBox = data.purchaseBox;

  it('renderiza el shipping, stock, botones, vendedor y beneficios', () => {
    render(<PurchaseBox purchaseBox={mockPurchaseBox} />);
    expect(screen.getByText(mockPurchaseBox.shipping)).toBeInTheDocument();
    expect(screen.getByText(/Stock disponible/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprar ahora/i)).toBeInTheDocument();
    expect(screen.getByText(/Agregar al carrito/i)).toBeInTheDocument();
    expect(screen.getByText(mockPurchaseBox.seller.name)).toBeInTheDocument();
    mockPurchaseBox.benefits.forEach(benefit => {
      expect(screen.getByText(benefit.text)).toBeInTheDocument();
    });
  });
});
