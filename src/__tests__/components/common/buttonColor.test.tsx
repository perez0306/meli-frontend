import { render, screen } from '@testing-library/react';
import ButtonColor from '@/components/commons/buttonColor';
import React from 'react';
import { data } from '@/__tests__/mocks';

const mockProductInfo = data.productInfo;

describe('ButtonColor', () => {
  it('renderiza el color y los botones de variantes', () => {
    render(<ButtonColor productInfo={mockProductInfo} />);
    expect(screen.getByText(/Color:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(2);
  });
});
