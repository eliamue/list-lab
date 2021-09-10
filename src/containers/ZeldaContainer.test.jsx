import React from 'react';
import { render, screen } from '@testing-library/react';
import ZeldaContainer from './ZeldaContainer';
import { MemoryRouter } from 'react-router-dom';

describe('ZeldaContainer', () => {
  it('renders a list of Breath of the Wild creatures', async () => {
    render(
      <MemoryRouter>
        <ZeldaContainer />
      </MemoryRouter>
    );

    screen.getByAltText('Triforce loading icon');
    const ul = await screen.findByRole('list', {}, { timeout: 5000 });

    expect(ul).not.toBeEmptyDOMElement();
    const li = screen.getByRole('listitem', { name: 'cucco' });
    expect(li).toMatchSnapshot();
  });
});
