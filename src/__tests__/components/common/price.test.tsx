import { render, screen } from '@testing-library/react';
import Price from '@/components/commons/price';
import React from 'react';
import { data } from '@/__tests__/mocks';

const mockProductInfo = data.productInfo;

describe('Price', () => {
  it('renderiza el precio y el link de medios de pago', () => {
    render(<Price productInfo={mockProductInfo} />);
    expect(screen.getByText(mockProductInfo.priceFormatted)).toBeInTheDocument();
    expect(screen.getByText(/Ver los medios de pago/i)).toBeInTheDocument();
  });
});
