import './style/App.css';
import MemoryCard from './components/MemoryCard'
import ScoreBoard from './components/ScoreBoard'
import React, { useState } from 'react';

function App() {
  const [selectedCards, setSelection] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [log, setLog] = useState({});

  function handleClick(event) {
    let items = [...selectedCards, event.target.name]

    //log count 
    let loggedItem = items.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {})

    //update score and best score
    let count = 0;
    for (let item in loggedItem) {
      if (loggedItem[item] > 1) {
        setSelection([]);
        setLog({});
        if (bestScore < score) {
          setBestScore(score)
        }
        loggedItem = {};
        count = 0;
        items=[];
      } else {
        count++;
      }
      setScore(count);
    }
    setLog(loggedItem);
    setSelection(items)
  }

  return (
    <div className="App">
      <header>
        <div>
          <h1>Insects Memory Challenge</h1>
          <p>How well can you recognize and remember insects?</p>
          <p>Get points by clicking on insects but don't click on any more than once!</p>
        </div>
        <ScoreBoard score={score} bestScore={bestScore} />
      </header>
      <MemoryCard handleClick={handleClick} />
    </div>
  );

}

export default App;
