
import './App.css';
import Card from './Components/Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { cats } from './ListOfCats';
import reverseCard from './Components/Assets/icon.jpg';
import catEars from './Components/Assets/cat-ears-2.png';
// const backCover = cats.map((cat) => {
  //   (cat.image = reverseCard)
  //   return cat
  // });

function App() {
  
  useEffect(() => {
    setListOfCats(cats.sort(() => Math.random() - 0.5));
  }, []);

  const [listOfCats, setListOfCats] = useState([])

  const startNewGame = () => {
    const newRandomList = cats.sort(() => Math.random() - 0.5)
    setListOfCats(newRandomList);
  };

 console.log(listOfCats)
 
  return (
    <div className='app'>
      <h1 className='title'>FIND THE PAIRS</h1>
      <button onClick={() => startNewGame()}>Start New Game</button>
      <div className="game">
        {listOfCats?.map((cat) =>
          <Card key={cat.id} image={cat.image} name={cat.name} />
        )}
      </div>
    </div>
  );
}

export default App;
