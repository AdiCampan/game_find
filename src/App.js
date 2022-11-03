
import './App.css';
import Card from './Components/Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { cats } from './ListOfCats';

function App() {
  const randomList= () => cats.sort(() => Math.random() - 0.5)
  const [listOfCats, setListOfCats] = useState(randomList);
  const [hideCats, setHideCats] = useState(false);

  useEffect(() => {
    setListOfCats(randomList)
    const hide = () => {
      setHideCats(true)
    };
    setTimeout(hide, 2000);
  }, [listOfCats]);

  const startNewGame = () => {
    setListOfCats(randomList)
    const hide = () => {
      setHideCats( ()=> true)
    };
    setTimeout(hide, 2000);
  };

  return (
    <div className='app'>
      <h1 className='title'>FIND THE PAIRS</h1>
      <button onClick={() => startNewGame()}>Start New Game</button>
      <div className="game">
        {listOfCats?.map((cat) =>
          <Card
            listOfCats={listOfCats}
            key={cat.id}
            id={cat.id}
            image={cat.image}
            hideCats={hideCats}
          />
        )}
      </div>
    </div>
  );
}

export default App;
