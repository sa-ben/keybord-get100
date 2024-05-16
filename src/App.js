import { useState } from 'react';
import './App.css';
import MainGet100 from './get100/MainGet100';
import MainKB from './keyboard/MainKB';

function App() {
  const [game, setGame] = useState(1)
  return (
    <div className="app">  
      <header className='header'>  
        <button className='btnGame game_a' style={{ backgroundColor: game === 1 ? " rgb(75, 75, 119)" : "rgb(111, 111, 176)" }} onClick={() => setGame(1)}>WYSIWYG</button>
        <button className='btnGame game_b' style={{ backgroundColor: game === 1 ? "rgb(111, 111, 176)" : " rgb(75, 75, 119)" }} onClick={() => setGame(2)}>GET 100</button>
      </header>
      {game === 1 && <MainKB />}
      {game === 2 && <MainGet100 />}
    </div>
  );
}

export default App;
