import { render, screen } from '@testing-library/react';
import ProductDescriptionBox from '@/app/detail/[id_product]/components/productDescriptionBox';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('ProductDescriptionBox', () => {
  const mockDescriptionBox = data.descriptionBox;

  it('renderiza el título y los bloques de descripción', () => {
    render(<ProductDescriptionBox descriptionBox={mockDescriptionBox} />);
    expect(screen.getByText(mockDescriptionBox.title)).toBeInTheDocument();
    mockDescriptionBox.blocks.forEach(block => {
      expect(screen.getByText(block.subtitle)).toBeInTheDocument();
      expect(screen.getByText(block.text)).toBeInTheDocument();
    });
  });
});
