import React, { Component } from 'react';
import ResortCard from '../ResortCard/ResortCard';
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main>
        <h1>Ski Brew</h1>
        <ResortCard />
        <BreweryContainer />
      </main>
    )
  }
}

export default App;
