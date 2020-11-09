import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ResortCard.css';

const ResortCard = (props) => {
  return(
      <section key={props.id} className='resort-card'>
          <span className='resort-link'>
            <Link to={`/${props.name}`}>
              <img className='resort-image' src={props.image} alt={`${props.name} ski resort`}/>
              {props.name}
            </ Link>
          </span>
      </section>
  )
}
export default ResortCard

ResortCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
}
