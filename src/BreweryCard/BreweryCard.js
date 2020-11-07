import React from 'react';
import './BreweryCard.css';

const BreweryCard = (props) => {
  return(
    <section>
      <h4>{props.brewery.name}</h4>
        <p>{props.brewery.phone.slice(0, 3)}-{props.brewery.phone.slice(3, 6)}-{props.brewery.phone.slice(6, 9)}</p>
        <p>Address: {props.brewery.street}</p>
        <p>{props.brewery.city}, CO {props.brewery.postal_code}</p>
        <p>Brewery Link: {props.brewery.url}</p>
      <button type='button'>Add to Favorites</button>
    </section>
  )
}
export default BreweryCard;
