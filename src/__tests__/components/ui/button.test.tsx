import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/button';
import React from 'react';

describe('Button', () => {
  it('renderiza el texto correctamente', () => {
    render(<Button>Click aquí</Button>);
    expect(screen.getByText('Click aquí')).toBeInTheDocument();
  });

  it('llama a la función onClick cuando se hace click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});
