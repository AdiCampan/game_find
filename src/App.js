import './App.css';
import footprint from './Components/Assets/Images/cat-leg3.png';
import Card from './Components/Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { cats } from './ListOfCats';
import startAudio from './Components/Assets/Audio/start.wav';
import finalAudio from './Components/Assets/Audio/final.wav';
import pair from './Components/Assets/Audio/pair.wav';
import click from './Components/Assets/Audio/click.wav';
import fail from './Components/Assets/Audio/fail.wav'

function App() {
  const [listOfCats, setListOfCats] = useState([]);
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);
  const [showAllCats, setShowAllCats] = useState(true);
  const [pairs, setPairs] = useState(0);
  const [winText, setWinerText] = useState();

  const newGameAudio = () => {
    const audio = new Audio(startAudio);
    audio.play();
  };
  const finalGameAudio = () => {
    const audio = new Audio(finalAudio)
    audio.play()
  };
  const clickAudio = () => {
    const audio = new Audio(click)
    audio.play()
  };
  const pairAudio = () => {
    const audio = new Audio(pair)
    audio.play()
  };
  const failAudio = () => {
    const audio = new Audio(fail)
    audio.play()
  };

  useEffect(() => {
    randomList()
  }, [])

  const randomList = () => {
    const randomize = [...cats, ...cats]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }))
    setListOfCats(randomize)
    setFirstImage(null)
    setSecondImage(null)
    setTurns(0)
    setPairs(0)
    setWinerText()
    setTimeout(() => setShowAllCats(false), 1000)
  }


  const startNewGame = () => {
    newGameAudio()
    setShowAllCats(true)
    randomList()
  };

  const selectCards = (cat) => {
    firstImage ? setSecondImage(cat) : setFirstImage(cat)
  };
  
  if (firstImage && !secondImage) {
    clickAudio()
  }
  useEffect(() => {
    if (firstImage && secondImage) {
      setDisabled(true)
      if (firstImage.image === secondImage.image) {
        setListOfCats(prevList => {
          return prevList.map(card => {
            if (card.image === firstImage.image) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        pairAudio()
        resetTurns()
        setPairs(prevPairs => prevPairs + 1)
      } else {
        failAudio()
        setTimeout(() => resetTurns(), 1000)
      }
    }
  }, [firstImage, secondImage]);

  const resetTurns = () => {
    setFirstImage(null)
    setSecondImage(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  };
  useEffect(() => {
    if (pairs === 10) {
      finalGameAudio()
      setWinerText("WELL DONE !")
    }
  }, [pairs])



  return (
    <div className='App'>
      <img onClick={() => startNewGame()} src={footprint} className='footprint' alt='footprint' />
      <h1 className='title'>FIND THE PAIRS</h1>
      {/* <button className='button' onClick={() => startNewGame()}>Start New Game</button> */}
      <p className='moves'>Moves :{turns}</p>

      <div className="card-grid">
        <p className={winText ? 'well-done' : 'well-done-hide'}>{winText}</p>
        {listOfCats.map((cat) => (
          <Card
            disabled={disabled}
            flipped={cat === firstImage || cat === secondImage || cat.matched || showAllCats}
            onSelectCards={selectCards}
            cat={cat}
            key={cat.id}
          />
        ))}
      </div>
    </div>
  );

};

export default App;
