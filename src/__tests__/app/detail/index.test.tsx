import { render, screen } from '@testing-library/react';
import DetailPage from '@/app/detail/[id_product]/components';
import { data } from '@/__tests__/mocks';
import React from 'react';

describe('Página principal de producto (DetailPage)', () => {
  it('renderiza correctamente en desktop', () => {
    render(<DetailPage product={data} isMobile={false} />);
    // Verifica que se muestre el título del producto
    expect(screen.getByText(data.title)).toBeInTheDocument();
    // Verifica que se muestre el precio
    expect(screen.getByText(data.productInfo.priceFormatted)).toBeInTheDocument();
    // Verifica que se muestre el nombre del vendedor
    expect(screen.getByText(data.purchaseBox.seller.name)).toBeInTheDocument();
    // Verifica que se muestre el shipping
    expect(screen.getByText(data.purchaseBox.shipping)).toBeInTheDocument();
    // Verifica que se muestre el título de la sección de características
    expect(screen.getByText(/Características del producto/i)).toBeInTheDocument();
    // Verifica que se muestre el título de la sección de descripción
    expect(screen.getByText(data.descriptionBox.title)).toBeInTheDocument();
  });

  it('renderiza correctamente en mobile', () => {
    render(<DetailPage product={data} isMobile={true} />);
    // Verifica que se muestre el título del producto
    expect(screen.getByText(data.productInfo.title)).toBeInTheDocument();
    // Verifica que se muestre el precio
    expect(screen.getByText(data.productInfo.priceFormatted)).toBeInTheDocument();
    // Verifica que se muestre el nombre del vendedor
    expect(screen.getByText(data.purchaseBox.seller.name)).toBeInTheDocument();
    // Verifica que se muestre el shipping
    expect(screen.getByText(data.purchaseBox.shipping)).toBeInTheDocument();
    // Verifica que se muestre el título de la sección de características
    expect(screen.getByText(/Características del producto/i)).toBeInTheDocument();
    // Verifica que se muestre el título de la sección de descripción
    expect(screen.getByText(data.descriptionBox.title)).toBeInTheDocument();
  });
});
