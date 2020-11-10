import React from 'react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
jest.mock('../apiCalls');
import { getAllBreweries, getBreweryByCity } from '../apiCalls';

describe('App', () => {
  it('Should display a title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const title = getByText('Ski Brew');
    expect(title).toBeInTheDocument();
  });

  it('Should display home and favorites links', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const homeLink = getByText('Ski Brew');
    const favsLink = getByText('Favorites');

    expect(homeLink).toBeInTheDocument();
    expect(favsLink).toBeInTheDocument();
  });

  it('Should display an instruction to the user to select their ski area', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const skiAreaTitle = getByText('Select Your Ski Area');

    expect(skiAreaTitle).toBeInTheDocument();
  })

  it('Should display ski resort cards', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const aspen = getByText('Aspen');
    const breck = getByText('Breckenridge');
    const crestedButte = getByText('Crested Butte');
    const steamboat = getByText('Steamboat Springs');
    const telluride = getByText('Telluride');
    const winterPark = getByText('Winter Park');
    const vail = getByText('Vail');

    expect(aspen).toBeInTheDocument();
    expect(breck).toBeInTheDocument();
    expect(crestedButte).toBeInTheDocument();
    expect(steamboat).toBeInTheDocument();
    expect(telluride).toBeInTheDocument();
    expect(winterPark).toBeInTheDocument();
    expect(vail).toBeInTheDocument();
  });

  it('Should display local breweries when a user clicks a ski resort', async () => {
    getAllBreweries.mockResolvedValueOnce([
        { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Aspen', postal_code: '12345', website_url: 'URL' },
        { id: 2, name: 'Brewery2', phone: '1234567890', street: '456 Def St', city: 'Aspen', postal_code: '67890', website_url: 'URL' },
        { id: 3, name: 'Brewery3', phone: '12345678901', street: '123 Abc St', city: 'Vail', postal_code: '12345', website_url: 'URL' }
    ])

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const aspen = getByText('Aspen');

    userEvent.click(aspen);

    const brewery1 = await waitFor(() => getByText('Brewery1'));
    const brewery2 = await waitFor(() => getByText('Brewery2'));

    expect(brewery1).toBeInTheDocument();
    expect(brewery2).toBeInTheDocument();
  });

  it('Should not display breweries that are not near the resort', async () => {
    getAllBreweries.mockResolvedValueOnce([
        { id: 1, name: 'Aspen Brewery', phone: '1234567890', street: '123 Abc St', city: 'Aspen', postal_code: '12345', website_url: 'URL' },
        { id: 2, name: 'Vail Brewery', phone: '1234567890', street: '456 Def St', city: 'Vail', postal_code: '67890', website_url: 'URL' }
      ])

    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    //User selects the Vail on the home page
    const vailResort = getByText('Vail');
    userEvent.click(vailResort);

    //User views breweries near Vail
    const vailBrewery = await waitFor(() => getByText('Vail Brewery'));
    expect(vailBrewery).toBeInTheDocument();

    //Select all headers on the page
    const headings = getAllByRole('heading')
    expect(headings).toHaveLength(3)

    //The user does NOT see breweries from another city
    expect(headings[0]).not.toBe('Aspen Brewery');
    expect(headings[1]).not.toBe('Aspen Brewery');
    expect(headings[2]).not.toBe('Aspen Brewery');
  });

  it('Should allow a user to favorite the brewery & see it in their favorites list', async () => {
    getAllBreweries.mockResolvedValueOnce([
      { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Aspen', postal_code: '12345', website_url: 'URL' },
      { id: 2, name: 'Brewery2', phone: '1234567890', street: '456 Def St', city: 'Aspen', postal_code: '67890', website_url: 'URL' },
      { id: 2, name: 'Brewery3', phone: '1234567890', street: '456 Def St', city: 'Vail', postal_code: '67890', website_url: 'URL' }
    ])

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    //A user clicks on the resort they're skiing at
    const vailResort = getByText('Vail');
    userEvent.click(vailResort);

    //the user should see breweries near Vail
    const brewery3 = await waitFor(() => getByText('Brewery3'));
    expect(brewery3).toBeInTheDocument();

    //the user selects the brewery to add to favorites
    const favBtn = getByText("Add to Favorites");

    //the user clicks the Favorites link to view their favorites
    expect(favBtn).toBeInTheDocument();
    userEvent.click(favBtn)

    //the user clicks the link to take them to their favorites page
    const favLink = getByText('Favorites')
    userEvent.click(favLink)

    //the user can view the brewery that they added to their favorites
    const brewery3Fav = await waitFor(() => getByText('Brewery3'));
    const brewery3Address = await waitFor(() => getByText('Address: 456 Def St'));
    expect(brewery3Fav).toBeInTheDocument();
    expect(brewery3Address).toBeInTheDocument();
  });

  it('Should allow a user to favorite a brewery & delete it from their favorites list', async () => {
    getAllBreweries.mockResolvedValueOnce([
      { id: 1, name: 'Brewery1', phone: '1234567890', street: '123 Abc St', city: 'Aspen', postal_code: '12345', website_url: 'URL' },
      { id: 2, name: 'Brewery2', phone: '1234567890', street: '456 Def St', city: 'Aspen', postal_code: '67890', website_url: 'URL' },
      { id: 2, name: 'Brewery3', phone: '1234567890', street: '456 Def St', city: 'Vail', postal_code: '67890', website_url: 'URL' }
    ])

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    //A user clicks on the resort they're skiing at
    const vailResort = getByText('Vail');
    userEvent.click(vailResort);

    //the user should see breweries near Vail
    const brewery3 = await waitFor(() => getByText('Brewery3'));
    expect(brewery3).toBeInTheDocument();

    //the user selects the brewery to add to favorites
    const favBtn = getByText("Add to Favorites");

    //the user clicks the Favorites link to view their favorites
    expect(favBtn).toBeInTheDocument();
    userEvent.click(favBtn)

    //the user clicks the link to take them to their favorites page
    const favLink = getByText('Favorites')
    userEvent.click(favLink)

    //the user can delete brewery from their favorites
    const brewery3Fav = await waitFor(() => getByText('Brewery3'));
    const brewery3DeleteBtn = await waitFor(() => getByText('Remove'))
    expect(brewery3Fav).toBeInTheDocument();
    expect(brewery3DeleteBtn).toBeInTheDocument();
    userEvent.click(brewery3DeleteBtn);

    //the brewery should be removed from the favorites page & not display
    expect(brewery3Fav).not.toBeInTheDocument();
  });
});
