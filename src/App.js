import cat1 from './Components/Assets/cat1.jpg';
import cat2 from './Components/Assets/cat2.jpg';
import cat3 from './Components/Assets/cat3.jpg';
import cat4 from './Components/Assets/cat4.jpg';
import cat5 from './Components/Assets/cat5.jpg';
import cat6 from './Components/Assets/cat6.jpg';
import cat7 from './Components/Assets/cat7.jpg';
import cat8 from './Components/Assets/cat8.jpg';
import cat9 from './Components/Assets/cat9.jpg';
import cat10 from './Components/Assets/cat10.jpg';

import './App.css';
import Card from './Components/Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { cats } from './ListOfCats';

function App() {
  const cats = [
    { id: 1, name: 'cat1', image: cat1 },
    { id: 2, name: 'cat1', image: cat1 },
    { id: 3, name: 'cat2', image: cat2 },
    { id: 4, name: 'cat2', image: cat2 },
    { id: 5, name: 'cat3', image: cat3 },
    { id: 6, name: 'cat3', image: cat3 },
    { id: 7, name: 'cat4', image: cat4 },
    { id: 8, name: 'cat4', image: cat4 },
    { id: 9, name: 'cat5', image: cat5 },
    { id: 10, name: 'cat5', image: cat5 },
    { id: 11, name: 'cat6', image: cat6 },
    { id: 12, name: 'cat6', image: cat6 },
    { id: 13, name: 'cat7', image: cat7 },
    { id: 14, name: 'cat7', image: cat7 },
    { id: 15, name: 'cat8', image: cat8 },
    { id: 16, name: 'cat8', image: cat8 },
    { id: 17, name: 'cat9', image: cat9 },
    { id: 18, name: 'cat9', image: cat9 },
    { id: 19, name: 'cat10', image: cat10 },
    { id: 20, name: 'cat10', image: cat10 },
  ];

  const [listOfCats, setListOfCats] = useState([]);
  const [hideCats, setHideCats] = useState(false);
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [turns, setTurns] = useState(0);
  

  useEffect(() => {
    const randomList = cats.sort(() => Math.random() - 0.5)
    setListOfCats(randomList)
    const hide = () => {
      setHideCats(true)
    };
    setTimeout(hide, 1000);
  }, []);

  const startNewGame = () => {
    resetTurns()
    const randomList = cats.sort(() => Math.random() - 0.5)
    setListOfCats(randomList)
    const hide = () => {
      setHideCats( true)
    };
    setTimeout(hide, 1000);
  };

  const selectCards = (cat) => {
    firstImage ? setSecondImage(cat) : setFirstImage(cat)
  };

  useEffect(() => {
    if (firstImage && secondImage) {
      if (firstImage.image === secondImage.image) {
        console.log("miaw")
      } else {
        
      } resetTurns()
    }
    console.log(firstImage, secondImage)
  }, [firstImage, secondImage]);

  const resetTurns = () => {
    setTurns(0)
   
    setFirstImage(null)
    setSecondImage(null)
  };

  return (
    <div className='app'>
      <h1 className='title'>FIND THE PAIRS</h1>
      <button onClick={() => startNewGame()}>Start New Game</button>
      <div className="game">
        {listOfCats.map((cat) =>
          <Card
            onSelectCards={selectCards}
            cat={cat}
            name={cat.name}
            key={cat.id}
            id={cat.id}
            image={cat.image}
            hideCats={hideCats}
          />
        )}
      </div>
    </div>
  );
};

export default App;
