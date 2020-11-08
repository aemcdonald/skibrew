import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
});
