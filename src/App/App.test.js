import React from 'react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { getAllBreweries } from '../apiCalls';
jest.mock('../apiCalls');

describe('App', () => {
  it('Should display a title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const title = screen.getByText('Ski Brew');
    expect(title).toBeInTheDocument();
  });

  it('Should display home and favorites links', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const homeLink = screen.getByText('Home');
    const favsLink = screen.getByText('Favorites');

    expect(homeLink).toBeInTheDocument();
    expect(favsLink).toBeInTheDocument();
  });

  it('Should display ski resort cards', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const aspen = screen.getByText('Aspen');
    const breck = screen.getByText('Breckenridge');
    const crestedButte = screen.getByText('Crested Butte');
    const steamboat = screen.getByText('Steamboat Springs');
    const telluride = screen.getByText('Telluride');
    const winterPark = screen.getByText('Winter Park');
    const vail = screen.getByText('Vail');

    expect(aspen).toBeInTheDocument();
    expect(breck).toBeInTheDocument();
    expect(crestedButte).toBeInTheDocument();
    expect(steamboat).toBeInTheDocument();
    expect(telluride).toBeInTheDocument();
    expect(winterPark).toBeInTheDocument();
    expect(vail).toBeInTheDocument();
  });

  // it('Should display local breweries when a user clicks a ski resort', async () => {
  //   getAllBreweries.mockResolvedValue(
  //     { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Mars', postal_code: '12345', website_url: 'URL' },
  //     { id: 2, name: 'Brewery2', phone: '1234567890', street: '456 Def St', city: 'Saturn', postal_code: '67890', website_url: 'URL' }
  //   )
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   )
  //
  //   const aspen = screen.getByText('Aspen');
  //   const favorites = screen.getByText('Favorites');
  //
  //   expect(aspen).toBeInTheDocument();
  //   expect(favorites).toBeInTheDocument();
  //
  //   userEvent.click(aspen);
  //
  //   const name1 = await waitFor(() => screen.getByText('Brewery1'))
  //   expect(name1).toBeInTheDocument()
  // });
});
