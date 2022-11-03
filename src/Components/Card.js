import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, id,  hideCats, listOfCats }) => {
  const [view, setView] = useState(false);
  const [firstImage, setFirstImage] = useState();
  const [secondImage, setSecondImage] = useState();

  const showImage = (id) => {
    const firstCat = listOfCats.filter((cat) => cat.id === id)
    const secondCat = listOfCats.filter((cat) => cat.id === id)
     setView(true)
     setFirstImage(firstCat[0].image)
     setSecondImage(secondCat[0].image)
     console.log((firstCat[0].image),(secondCat[0].image));
  };
  
  

  return (
    <div onClick={() => showImage(id)} className={view? 'hide-card': 'card'}>
      {/* {view && <img src={cat}/>} */}
      <img className={hideCats && !view ? 'image-hide' : 'image'} src={image} />
    </div>
  )
};

export default Card;