import { render } from '@testing-library/react';
import Divider from '@/components/ui/divider';
import React from 'react';

describe('Divider', () => {
  it('renderiza el div con la clase divider', () => {
    const { container } = render(<Divider />);
    const div = container.querySelector('div');
    expect(div).toBeInTheDocument();
    expect(div?.className).toMatch(/divider/);
  });
});
