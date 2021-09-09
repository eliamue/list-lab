import React from 'react';
import { render, screen } from '@testing-library/react';
import ZeldaContainer from './ZeldaContainer';
import { MemoryRouter } from 'react-router-dom';
import DetailContainer from './DetailContainer';

describe('ZeldaContainer', () => {
  it('renders a list of Breath of the Wild creatures', async () => {
    render(
      <MemoryRouter>
        <ZeldaContainer />
      </MemoryRouter>
    );

    screen.getByAltText('Triforce loading icon');
    screen.debug();
    const ul = await screen.findByRole('list');

    expect(ul).toMatchSnapshot();
  });

  it.skip('renders a single Breath of the Wild creature', async () => {
    render(
      <MemoryRouter>
        <DetailContainer />
      </MemoryRouter>
    );

    screen.getByAltText('Triforce loading icon');
    screen.debug();
    const creature = await screen.findByLabelText('creature');

    expect(creature).toMatchSnapshot();
  });
});
