import { render, screen } from '@testing-library/react';
import SellerBox from '@/app/detail/[id_product]/components/sellerBox';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('SellerBox', () => {
  const mockSellerBox = data.sellerBox;

  it('renderiza el título, productos, métricas y botón', () => {
    render(<SellerBox sellerBox={mockSellerBox} />);
    expect(screen.getByText(new RegExp(mockSellerBox.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(`+${mockSellerBox.products}`)).toBeInTheDocument();
    mockSellerBox.metrics.forEach(metric => {
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
    expect(screen.getByText(/Ver más productos del vendedor/i)).toBeInTheDocument();
  });
});
