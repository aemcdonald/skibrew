import React, { Component } from 'react';
import ResortCard from '../ResortCard/ResortCard';
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import { getAllBreweries } from '../apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      breweries: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    const allBreweries = await getAllBreweries()
    .catch(error => {
      this.setState({ error: 'Failed to retrieve breweries'})
    })
    this.setState({ breweries: allBreweries.flat()})
    console.log(allBreweries.flat());
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
