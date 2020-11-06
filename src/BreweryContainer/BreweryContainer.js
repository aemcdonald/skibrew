import React, { Component } from 'react';
import BreweryCard from '../BreweryCard/BreweryCard';
import './BreweryContainer.css';

class BreweryContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section>
        <h3>BreweryContainer goes here</h3>
        <BreweryCard />
      </section>
    )
  }
}
export default BreweryContainer;
