import React from 'react';
import './BreweryCard.css';

const BreweryCard = (props) => {
  console.log(props.brewery);
  return(
    <section>
      <h4>{props.brewery.name}</h4>
        <p>Address: {props.brewery.street} </p>
        <p>{props.brewery.city}, CO {props.brewery.postal_code}</p>
        <p>Brewery Link: {props.brewery.url}</p>
      <button type='button'>Add to Favorites</button>
    </section>
  )
}
export default BreweryCard;
