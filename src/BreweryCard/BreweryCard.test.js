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

    const name = getByText('Storm Peak Brewing');
    const address = getByText('Address: 123 Abc St')
    const location = getByText('Steamboat Springs, CO 12345');
    const website = getByText('View Website');
    const favBtn = getByText('Add to Favorites');

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

    const favBtn = getByText('Add to Favorites');
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

    const favBtn = queryByTestId('favBtn')
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

    const favBtn = queryByTestId('favBtn')
    expect(favBtn).not.toBeInTheDocument()
  });

  it('Should render the delete from favorites button when passed certain props', () => {
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

    const deleteBtn = queryByTestId('delete-favBtn');
    expect(deleteBtn).toBeInTheDocument();
  });

  it('Should not render the delete from favorites button when passed different props', () => {
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
        />
    )

    const deleteBtn = queryByTestId('delete-favBtn');
    expect(deleteBtn).not.toBeInTheDocument();
  });

  it('Should fire a function when delete button is clicked', () => {
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

    const deleteBtn = queryByTestId('delete-favBtn');
    userEvent.click(deleteBtn);

    expect(mockDeleteFn).toHaveBeenCalledTimes(1);
  });

  it('Should fire a function with the correct argument when delete button is clicked', () => {
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

    const deleteBtn = queryByTestId('delete-favBtn');
    userEvent.click(deleteBtn);

    expect(mockDeleteFn).toHaveBeenCalledTimes(1);
    expect(mockDeleteFn).toHaveBeenCalledWith(mockBrewery)
  });
});
