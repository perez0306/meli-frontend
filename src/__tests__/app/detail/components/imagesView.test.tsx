import { render, screen } from '@testing-library/react';
import ImagesView from '@/app/detail/[id_product]/components/imagesView';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('ImagesView', () => {
  const mockImages = data.images;

  it('renderiza el título, las imágenes y el botón de ver más imágenes', () => {
    render(<ImagesView images={mockImages} />);
    expect(screen.getByText(/Imágenes del producto/i)).toBeInTheDocument();
    mockImages.forEach(image => {
      expect(screen.getByAltText(image)).toBeInTheDocument();
    });
    expect(screen.getByText(/Ver más imágenes/i)).toBeInTheDocument();
  });
});
