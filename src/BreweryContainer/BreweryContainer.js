import React, { Component } from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import PropTypes from 'prop-types';
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
          brewery={brewery}
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
