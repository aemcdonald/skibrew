import React from 'react';
import ResortCard from './ResortCard';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ResortCard', () => {
  it('Should render a card with the correct information', () => {
  const { getByText } = render(
      <BrowserRouter>
        <ResortCard
          key={1}
          id={1}
          name={'Breckenridge'}
        />
      </BrowserRouter>
    )

    const resortName = getByText('Breckenridge')
    expect(resortName).toBeInTheDocument();
  })

  it('Should render a card with a link', () => {
  const { getByRole } = render(
      <BrowserRouter>
        <ResortCard
          key={1}
          id={1}
          name={'Aspen'}
        />
      </BrowserRouter>
    )

    const resortLink = getByRole('link', { name: /Aspen/i});
    expect(resortLink).toBeInTheDocument();
  });

  it('Shoulder render an image', () => {
    const { getByRole, getByAltText } = render(
        <BrowserRouter>
          <ResortCard
            key={1}
            id={1}
            name={'Aspen'}
          />
        </BrowserRouter>
      )
    const resortImage = getByAltText('Aspen ski resort');
    expect(resortImage).toBeInTheDocument();
  });
});
