import React from 'react';
import BreweryCard from './BreweryCard';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('BreweryCard', () => {
  it('Should render a brewery card with the correct information', () => {
    const mockBrewery = {
      name: 'Storm Peak Brewing',
      phone: '1234567890',
      street: '123 Abc St',
      city: 'Steamboat Springs',
      postal_code: '12345',
      website_url: 'URL'
    }

    const { getByText } = render(
        <BreweryCard
          key={1}
          brewery={mockBrewery}
        />
    )

    const name = screen.getByText('Storm Peak Brewing');
    const address = screen.getByText('Address: 123 Abc St')
    const location = screen.getByText('Steamboat Springs, CO 12345');
    const website = screen.getByText('View Website');
    const favBtn = screen.getByText('Add to Favorites');

    expect(name).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(website).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();
  });

  it('Should fire a function with the correct argument when clicked', () => {
    const mockFn = jest.fn()
    const mockBrewery = {
      name: 'Storm Peak Brewing',
      phone: '1234567890',
      street: '123 Abc St',
      city: 'Steamboat Springs',
      postal_code: '12345',
      website_url: 'URL'
    }

    const { getByText } = render(
        <BreweryCard
          key={1}
          brewery={mockBrewery}
          handleClick={mockFn}
        />
    )

    const favBtn = screen.getByText('Add to Favorites');
    expect(favBtn).toBeInTheDocument();

    userEvent.click(favBtn);
    
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(mockBrewery);
  });
});
