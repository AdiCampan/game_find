import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ image, hideCats,   cat, onSelectCards }) => {
  const [view, setView] = useState(false);

  const showImage = (cat) => {
    onSelectCards(cat)
    setView(true)
    // setTimeout(setView(false), 1000);
  };

  return (
    <div onClick={() => showImage(cat)} className={view ? 'hide-card' : 'card'}>
      <img className={hideCats && !view ? 'image-hide' : 'image'} alt='cat' src={image} />
    </div>
  )
};

export default Card;