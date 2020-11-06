import React from 'react';
import './BreweryCard.css';

const BreweryCard = () => {
  return(
    <section>
      <h4>Brewery Title</h4>
        <p>Brewery Address</p>
        <p>Brewery Link</p>
      <button type='button'>Add to Favorites</button>
    </section>
  )
}
export default BreweryCard;
