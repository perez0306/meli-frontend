import { render, screen } from '@testing-library/react';
import DetailProduct from '@/components/commons/detailProduct';
import React from 'react';
import { data } from '@/__tests__/mocks';

const mockProductInfo = data.productInfo;

describe('DetailProduct', () => {
  it('renderiza el título de features y la lista de features', () => {
    render(<DetailProduct productInfo={mockProductInfo} />);
    expect(screen.getByText(/lo que tienes que saber/i)).toBeInTheDocument();
    mockProductInfo.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });
});
