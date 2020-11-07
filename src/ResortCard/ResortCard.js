import React from 'react';
import './ResortCard.css';

const ResortCard = (props) => {
  return(
    <section key={props.id}>
      <h2>{props.name}</h2>
    </section>
  )
}
export default ResortCard
