import React from 'react';
import { render, screen } from '@testing-library/react';
import ZeldaContainer from './ZeldaContainer';

describe('ZeldaContainer', () => {
  it('renders a list of Breath of the Wild creatures', async () => {
    render(<ZeldaContainer />);

    screen.getByAltText('Triforce loading icon');
    screen.debug();
    const ul = await screen.findByRole('list');

    expect(ul).toMatchSnapshot();
  });
});
