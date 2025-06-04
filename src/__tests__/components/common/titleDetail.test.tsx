import { render, screen, fireEvent } from '@testing-library/react';
import TitleDetail from '@/components/commons/titleDetail';
import React from 'react';
import { data } from '@/__tests__/mocks';
import { postFavorite } from '@/lib/api/services';

// Mockea el servicio postFavorite para que no haga una llamada real
jest.mock('@/lib/api/services', () => ({
  postFavorite: jest.fn(),
}));

const mockProductInfo = data.productInfo;

describe('TitleDetail', () => {
  it('renderiza el status y el sold', () => {
    render(<TitleDetail productInfo={mockProductInfo} />);
    expect(screen.getByText(mockProductInfo.status)).toBeInTheDocument();
    expect(screen.getByText(`+${mockProductInfo.sold} vendidos`)).toBeInTheDocument();
  });

  it('llama a postFavorite al hacer click en el botón de favoritos', () => {
    render(<TitleDetail productInfo={mockProductInfo} />);
    const favBtn = screen.getByRole('button', { name: /favoritos/i });
    fireEvent.click(favBtn);
    expect(postFavorite).toHaveBeenCalled();
  });

  it('renderiza el título, el botón de favoritos y el tag de más vendido', () => {
    render(<TitleDetail productInfo={mockProductInfo} />);
    expect(screen.getByRole('heading', { name: mockProductInfo.title })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /favoritos/i })).toBeInTheDocument();
    expect(screen.getByText(/más vendido/i)).toBeInTheDocument();
  });
});
