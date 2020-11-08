import React from 'react';
import Favorites from './Favorites';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Favorites', () => {
  it('Should display a title', () => {
    const mockFavs = [
      { id: 1, name: 'Brewery1', phone: '1112223333', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL1' },
      { id: 2, name: 'Brewery2', phone: '1112224444', street: '456 Def St', city: 'Saturn', postal_code: '67890', website_url: 'URL2' }
    ]
    const { getByText } = render(
      <Favorites
        favorites={mockFavs}
      />
    )

    const title = screen.getByText('Favorites');
    expect(title).toBeInTheDocument();
  })
});
