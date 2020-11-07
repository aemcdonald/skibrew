import React from 'react';
import PropTypes from 'prop-types';
import BreweryCard from '../BreweryCard/BreweryCard';
import './Favorites.css';

const Favorites = (props) => {
  const favoriteBreweries = props.favorites.map(brewery => {
    return(
      <BreweryCard
        key={brewery.id}
        brewery={brewery}
      />
    )
  })

  return(
    <section>
      <h5>Favorites</h5>
      {favoriteBreweries}
    </section>
  )
}
export default Favorites

Favorites.propTypes = {
  favorites: PropTypes.array
}
