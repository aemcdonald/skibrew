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

  it('Should fire with the correct argument when add to fav btn clicked', () => {
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

  it('Should link to the brewery\'s website', () => {
    const mockBrewery = {
      name: 'Storm Peak Brewing',
      phone: '1234567890',
      street: '123 Abc St',
      city: 'Steamboat Springs',
      postal_code: '12345',
      website_url: 'http://www.yaybeer.com'
    }

    const { getByText, queryByTestId, getByRole } = render(
        <BreweryCard
          key={1}
          brewery={mockBrewery}
        />
    )

    const website = document.querySelector('a').getAttribute('href');
    expect(website).toBe('http://www.yaybeer.com');
  });

  it('Should render the favorite button if passed certain props', () => {
    const mockBrewery = {
      name: 'Storm Peak Brewing',
      phone: '1234567890',
      street: '123 Abc St',
      city: 'Steamboat Springs',
      postal_code: '12345',
      website_url: 'URL'
    }

    const { getByText, queryByTestId } = render(
        <BreweryCard
          key={1}
          brewery={mockBrewery}
        />
    )

    const favBtn = screen.queryByTestId('favBtn')
    expect(favBtn).toBeInTheDocument()
  });

  it('Should not show the favorite button without certain props', () => {
    const mockDeleteFn = jest.fn()
    const mockBrewery = {
      name: 'Storm Peak Brewing',
      phone: '1234567890',
      street: '123 Abc St',
      city: 'Steamboat Springs',
      postal_code: '12345',
      website_url: 'URL'
    }

    const { getByText, queryByTestId } = render(
        <BreweryCard
          key={1}
          brewery={mockBrewery}
          deleteFav={mockDeleteFn}
        />
    )

    const favBtn = screen.queryByTestId('favBtn')
    expect(favBtn).not.toBeInTheDocument()
  });
});
