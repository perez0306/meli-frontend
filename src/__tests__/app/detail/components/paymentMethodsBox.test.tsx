import { render, screen } from '@testing-library/react';
import PaymentMethodsBox from '@/app/detail/[id_product]/components/paymentMethodsBox';
import React from 'react';

describe('PaymentMethodsBox', () => {
  it('renderiza los títulos y el link de otros medios de pago', () => {
    render(<PaymentMethodsBox />);
    expect(screen.getAllByText(/Medios de pago/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Tarjetas de crédito/i)).toBeInTheDocument();
    expect(screen.getByText(/Tarjetas de débito/i)).toBeInTheDocument();
    expect(screen.getByText(/Efectivo/i)).toBeInTheDocument();
    expect(screen.getByText(/Conoce otros medios de pago/i)).toBeInTheDocument();
  });
});
