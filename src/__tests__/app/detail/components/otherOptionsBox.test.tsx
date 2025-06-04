import { render, screen } from '@testing-library/react';
import OtherOptionsBox from '@/app/detail/[id_product]/components/otherOptionsBox';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('OtherOptionsBox', () => {
  const mockOtherOptionsBox = data.sellerBox;

  it('renderiza el título y el link', () => {
    render(<OtherOptionsBox otherOptionsBox={mockOtherOptionsBox} />);
    expect(screen.getByText(/Otras opciones de compra/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockOtherOptionsBox.products, 'i'))).toBeInTheDocument();
  });
});
