import React from 'react';
import BreweryContainer from './BreweryContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('BreweryContainer', () => {
  it('Should display a title', () => {
    const mockBreweries = [
      { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL' },
      { id: 2, name: 'Brewery2', phone: '1234567890', street: '456 Def St', city: 'Saturn', postal_code: '67890', website_url: 'URL' }
    ]

    const { getByText } = render(
      <BreweryContainer
        breweries={mockBreweries}
      />)

    const title = screen.getByText('Apres Ski Brewery Choices')
    expect(title).toBeInTheDocument();
  });

  it('Should display brewery information passed to it', () => {
    const mockBreweries = [
      { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL' },
      { id: 2, name: 'Brewery2', phone: '1234567890', street: '456 Def St', city: 'Saturn', postal_code: '67890', website_url: 'URL' }
    ]

    const { getByText } = render(
      <BreweryContainer
        breweries={mockBreweries}
      />)

    const brewery1Name = screen.getByText('Brewery1');
    const brewery2Name = screen.getByText('Brewery2');
    const brewery1Street = screen.getByText('Address: 123 Abc St');
    const brewery2Street = screen.getByText('Address: 456 Def St');
    const brewery1City = screen.getByText('Mars, CO 12345');
    const brewery2City = screen.getByText('Saturn, CO 67890');

    expect(brewery1Name).toBeInTheDocument();
    expect(brewery2Name).toBeInTheDocument();
    expect(brewery1Street).toBeInTheDocument();
    expect(brewery2Street).toBeInTheDocument();
    expect(brewery1City).toBeInTheDocument();
    expect(brewery2City).toBeInTheDocument();
  });
});
