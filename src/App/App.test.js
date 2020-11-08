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
});
