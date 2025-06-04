import { render, screen } from '@testing-library/react';
import ProductInfo from '@/app/detail/[id_product]/components/productInfo';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('ProductInfo', () => {
  const mockProductInfo = data.productInfo;

  it('renderiza el título, precio, color, features y opciones de compra', () => {
    render(<ProductInfo productInfo={mockProductInfo} />);
    expect(screen.getByRole('heading', { name: mockProductInfo.title })).toBeInTheDocument();
    expect(screen.getByText(mockProductInfo.priceFormatted)).toBeInTheDocument();
    expect(screen.getByText(/Color:/i)).toBeInTheDocument();
    mockProductInfo.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
    expect(
      screen.getByText(new RegExp(`${mockProductInfo.buyOptions} productos nuevos`, 'i'))
    ).toBeInTheDocument();
  });
});
