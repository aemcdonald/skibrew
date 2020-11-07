import React, { Component } from 'react';
import ResortCard from '../ResortCard/ResortCard';
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import { Route, Link, NavLink } from 'react-router-dom'
import { getAllBreweries } from '../apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resorts: [
        { id: 1, name: 'Arapahoe Basin' },
        { id: 2, name: 'Aspen' },
        { id: 3, name: 'Breckenridge' },
        { id: 4, name: 'Copper Mountain' },
        { id: 5, name: 'Crested Butte' },
        { id: 6, name: 'Keystone' },
        { id: 7, name: 'Steamboat Springs' },
        { id: 8, name: 'Telluride' },
        { id: 9, name: 'Winter Park' },
        { id: 10, name: 'Vail' }
      ],
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
  }

  //need to map over resorts
    //need to render a resort card for each resort
    //needs to have a Link

  render() {
    const resortCards = this.state.resorts.map(resort => {
      return (
        <ResortCard
          key={resort.id}
          id={resort.id}
          name={resort.name}
        />
      )
    })

    return(
      <main>
        <h1>Ski Brew</h1>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <section>
          {resortCards}
        </section>
      </main>
    )
  }
}

export default App;
