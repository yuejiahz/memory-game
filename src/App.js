import './style/App.css';
import MemoryCard from './components/MemoryCard'
import ScoreBoard from './components/ScoreBoard'
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedCards, setSelection] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [log, setLog] = useState({});
  const [message, setMessage] = useState();

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
        if(bestScore == 40){
          setMessage("Congratulations you get a full score!!")
        }
        loggedItem = {};
        count = 0;
        items = [];
      } else {
        count++;
      }
      setScore(count);
    }
    setLog(loggedItem);
    setSelection(items)
  }
// show message when losing game
  useEffect(() => {
    setMessage("Opps you have clicked this before. You scored " + score + "/40 points! ")
    const timeout = setTimeout(() => {
      setMessage(null)
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [bestScore])

//mount initial message
  useEffect(() => {
    setMessage("Let's get started !!!")
    const timeout = setTimeout(() => {
      setMessage(null)
    }, 1200)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

//style of message
  const textStyle = {
    textAlign: "center",
    backgroundColor: 'black',
    color: "red",
    lineHeight: "220%",
    borderRadius: "10px",
    width: "50%",
    margin: "auto"
  }
  return (
    <div className="App">
      <header>
        <div>
          <h1>Insects Memory Challenge</h1>
          <p>How well can you recognize and remember insects?</p>
          <p >Get points by clicking on insects but don't click on any more than once!</p>
        </div>
        <ScoreBoard score={score} bestScore={bestScore} />
      </header>
      <p style={textStyle}>{message}</p>
      <MemoryCard bestScore={bestScore} handleClick={handleClick} />
    </div>
  );

}

export default App;
