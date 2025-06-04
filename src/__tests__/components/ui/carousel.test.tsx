import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '@/components/ui/carousel';
import React from 'react';
import { data } from '@/__tests__/mocks';

describe('Carousel', () => {
  const images = data.images;

  it('renderiza las miniaturas y la imagen principal', () => {
    render(<Carousel images={images} productTitle="Producto Test" />);
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    expect(screen.getByAltText('main-0')).toBeInTheDocument();
  });

  it('cambia la imagen principal al hacer click en un dot', async () => {
    render(<Carousel images={images} productTitle="Producto Test" />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]);
    await screen.findByAltText('main-1');
  });
});
