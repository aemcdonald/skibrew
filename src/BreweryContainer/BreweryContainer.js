import React, { Component } from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import './BreweryContainer.css';

class BreweryContainer extends Component {
  constructor(props) {
    super(props);
  }

  getResortBreweries = (props) => {
    return this.props.breweries.map(brewery => {
      return(
        <BreweryCard
          key={brewery.id}
          name={brewery.name}
          street={brewery.street}
          state={brewery.state}
          postal_code={brewery.postal_code}
          url={brewery.website_url}
        />
      )
    })
  }

  render() {
    return(
      <section>
        <h3>Apres Ski Brewery Choices</h3>
          {this.getResortBreweries()}
      </section>
    )
  }
}

export default BreweryContainer;
