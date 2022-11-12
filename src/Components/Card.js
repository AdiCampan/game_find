import React from 'react';
import './Card.css';
import icon from './Assets/Images/Cover.png';
import click from './Assets/Audio/click.wav';

const Card = ({flipped, cat, onSelectCards, disabled }) => {

  const clickAudio = () => {
    const audio = new Audio(click)
    audio.play()
  };

  const showImage = () => {
    // clickAudio()
    if (!disabled) {
      onSelectCards(cat)
    }
  };

  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img
          className='front'
          src={cat.image}
          alt='front card'
        />
        <img
          className='back'
          src={icon} onClick={() => showImage()}
          alt='cat icon'
        />
      </div>
    </div>
  )
};

export default Card;