import React from 'react';
import './BreweryCard.css';

const BreweryCard = (props) => {
  return(
    <section>
      <h4>{props.name}</h4>
        <p>Brewery Address: {props.street}</p>
        <p>{props.state}</p>
        <p>{props.postal_code}</p>
        <p>Brewery Link: {props.url}</p>
      <button type='button'>Add to Favorites</button>
    </section>
  )
}
export default BreweryCard;
