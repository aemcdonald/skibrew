import React from 'react';
import Favorites from './Favorites';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Favorites', () => {
  it('Should display a title', () => {
    const mockFavs = [
      { id: 1, name: 'Brewery1', phone: '1112223333', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL1' },
      { id: 2, name: 'B', phone: '1112224444', street: '456 Def St', city: 'Saturn', postal_code: '67890', website_url: 'URL2' }
    ]

    const { getByText } = render(
      <Favorites
        favorites={mockFavs}
      />
    )

    const title = getByText('Favorites');
    expect(title).toBeInTheDocument();
  })

  it('Should display a message to the user if their favorites list is empty', () => {
    const mockFavs = []

    const { getByText } = render(
      <Favorites
        favorites={mockFavs}
      />
    )

    const emptyFavMsg = getByText('No favorite breweries yet, add some!');
    expect(emptyFavMsg).toBeInTheDocument();
  });

  it('Should display a user\'s favorite Breweries', () => {
    const mockFavs = [
      { id: 1, name: 'Brewery1', phone: '1112223333', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL1' },
      { id: 2, name: 'Brewery2', phone: '1112224444', street: '456 Def St', city: 'Saturn', postal_code: '67890', website_url: 'URL2' }
    ]

    const { getByText } = render(
      <Favorites
        favorites={mockFavs}
      />
    )
   
    const brewery1Name = getByText('Brewery1');
    const brewery2Name = getByText('Brewery2');
    const brewery1Street = getByText('Address: 123 Abc St');
    const brewery2Street = getByText('Address: 456 Def St');
    const brewery1City = getByText('Mars, CO 12345');
    const brewery2City = getByText('Saturn, CO 67890');

    expect(brewery1Name).toBeInTheDocument();
    expect(brewery2Name).toBeInTheDocument();
    expect(brewery1Street).toBeInTheDocument();
    expect(brewery2Street).toBeInTheDocument();
    expect(brewery1City).toBeInTheDocument();
    expect(brewery2City).toBeInTheDocument();
  });
});
