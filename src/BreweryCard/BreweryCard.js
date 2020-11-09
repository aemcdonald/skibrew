import React from 'react';
import PropTypes from 'prop-types';
import './BreweryCard.css';

const BreweryCard = (props) => {
  return(
    <section className='brew-card'>
      <h4>{props.brewery.name}</h4>
        <p>{props.brewery.phone.slice(0, 3)}-{props.brewery.phone.slice(3, 6)}-{props.brewery.phone.slice(6, 9)}</p>
        <p>Address: {props.brewery.street}</p>
        <p>{props.brewery.city}, CO {props.brewery.postal_code}</p>
        <p>Brewery Link: <a href={props.brewery.website_url}target='_blank' rel='noreferrer'>View Website</a></p>
        {!props.onFav &&
      <button className='fav-btn' data-testid='favBtn' type='button'onClick={() => props.handleClick(props.brewery)}>Add to Favorites</button>}
    </section>
  )
}

export default BreweryCard;

BreweryCard.propTypes = {
  brewery: PropTypes.object,
  handleClick: PropTypes.func,
  onFav: PropTypes.bool
}
