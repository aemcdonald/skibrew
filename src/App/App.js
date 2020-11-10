import React, { Component } from 'react';
import ResortCard from '../ResortCard/ResortCard';
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import Favorites from '../Favorites/Favorites';
import { Route, Link, Switch } from 'react-router-dom';
import { getAllBreweries } from '../apiCalls';
import aspen from '../images/aspen.jpg';
import breck from '../images/breck.jpg';
import crestedButte from '../images/cb.jpg';
import steamboat from '../images/steamboat.jpg';
import silverton from '../images/silverton.jpg';
import telluride from '../images/telluride.jpg';
import winterPark from '../images/winterpark.jpg';
import vail from '../images/vail.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      resorts: [
        { id: 1, name: 'Aspen', image: aspen },
        { id: 2, name: 'Breckenridge', image: breck },
        { id: 3, name: 'Crested Butte', image: crestedButte },
        { id: 4, name: 'Silverton', image: silverton },
        { id: 5, name: 'Steamboat Springs', image: steamboat },
        { id: 6, name: 'Telluride', image: telluride },
        { id: 7, name: 'Winter Park', image: winterPark },
        { id: 8, name: 'Vail', image: vail }
      ],
      breweries: [],
      favorites: [],
      error: ''
    }
  }

  addFavorite = (newFavorite) => {
    const foundBrewery = this.state.favorites.find(favBrewery => favBrewery.name === newFavorite.name)
    if(!foundBrewery) {
      this.setState({ favorites: [...this.state.favorites, newFavorite] })
    }
  }

  removeFavorite = (removedBrewery) => {
    const filteredBreweries = this.state.favorites.filter(brewery => brewery.name !== removedBrewery.name)
    this.setState({ favorites: [...filteredBreweries] })
  }

  componentDidMount = async () => {
    try {
      const allBreweries = await getAllBreweries()
      this.setState({ breweries: allBreweries.flat()})
    } catch(error) {
      this.setState({ error: 'Failed to retrieve breweries'})
    }
  }

  render() {
    const resortCards = this.state.resorts.map(resort => {
      return (
          <ResortCard
            key={resort.id}
            id={resort.id}
            name={resort.name}
            image={resort.image}
          />
      )
    })

    return(
      <main className='main-area'>
        <nav className='home-header'>
          <Link to='/'>
            <h1 className='home-title'>Ski Brew</h1>
          </Link>
          <Link className='fav-link' to='/Favorites'>Favorites</Link>
        </nav>
          <Switch>
              <Route exact path='/'>
              <h2 className='resort-container-title'>Select Your Ski Area</h2>
              <section className='resort-card-container'>
                {resortCards}
              </section>
              </Route>
            <Route exact path='/Favorites'>
              <Favorites favorites={this.state.favorites} deleteFav={this.removeFavorite}/>
            </Route>
            <Route exact path='/:resort' render={({ match }) => {
              const resortBreweries = this.state.breweries.filter(brewery => {
                return match.params.resort === brewery.city
              })
              return <BreweryContainer breweries={resortBreweries} addFavorite={this.addFavorite}/>
            }} />
          </Switch>
      </main>
    )
  }
}

export default App;
