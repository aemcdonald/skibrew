import React from 'react';
import BreweryContainer from './BreweryContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('BreweryContainer', () => {
  it('Should display a title', () => {
    const mockBreweries = [
      { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL' },
      { id: 2, name: 'Storm Peak Brewing', phone: '1234567890', street: '123 Abc St', city: 'Steamboat Springs', postal_code: '12345', website_url: 'URL' }
    ]

    const { getByText } = render(
      <BreweryContainer
        breweries={mockBreweries}
      />)

    const title = screen.getByText('Apres Ski Brewery Choices')
    expect(title).toBeInTheDocument();
  });
});
