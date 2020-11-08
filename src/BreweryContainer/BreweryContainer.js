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
          handleClick={this.props.addFavorite}
        />
      )
    })
  }

  render() {
    return(
      <section>
        <h3 className='breweries-title'>Brewery Options Nearby</h3>
        <div className='cards-container'>
            {this.getResortBreweries()}
        </div>
      </section>
    )
  }
}

export default BreweryContainer;

BreweryContainer.propTypes = {
  breweries: PropTypes.array,
  addFavorite: PropTypes.func
}
