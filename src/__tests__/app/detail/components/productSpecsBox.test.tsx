import { render, screen } from '@testing-library/react';
import ProductSpecsBox from '@/app/detail/[id_product]/components/productSpecsBox';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('ProductSpecsBox', () => {
  const mockSpecs = data.specs;

  it('renderiza el título y las specs', () => {
    render(<ProductSpecsBox specs={mockSpecs} />);
    expect(screen.getByText(/Características del producto/i)).toBeInTheDocument();
    mockSpecs.forEach(spec => {
      expect(screen.getByText(new RegExp(spec.label, 'i'))).toBeInTheDocument();
    });
  });
});
