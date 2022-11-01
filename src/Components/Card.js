import React from 'react';
import './Card.css';

const Card = ({ image, name }) => {

  return (
    <div className='card'>
      <img className='image' src={image}/>
    </div>
  )
}

export default Card;