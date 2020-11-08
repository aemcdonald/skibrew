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
        onFav={true}
      />
    )
  })

  return(
    <section>
      <h3 className='fav-title'>Favorites</h3>
      <div className='fav-container'>
        {favoriteBreweries}
      </div>
    </section>
  )
}
export default Favorites

Favorites.propTypes = {
  favorites: PropTypes.array
}
