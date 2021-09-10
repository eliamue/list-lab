import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailContainer from './DetailContainer';
import { MemoryRouter } from 'react-router-dom';

describe('DetailContainer', () => {
  it('renders a single Breath of the Wild creature', async () => {
    render(
      <MemoryRouter initialEntries={['/47']}>
        <DetailContainer
          match={{
            params: {
              id: '47',
            },
          }}
        />
      </MemoryRouter>
    );

    screen.getByAltText('Triforce loading icon');
    const cre = await screen.findByText('Creature', {}, { timeout: 2000 });

    expect(cre).toMatchSnapshot();
  });
});
