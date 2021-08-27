import './style/App.css';
import MemoryCard from './components/MemoryCard'
import ScoreBoard from './components/ScoreBoard'
import React,{ useState } from 'react';

function App() {
const [selection, setSelection]= useState("")
console.log(selection)

  function handleClick(){
    console.log("Click")
  }
  return (
    <div className="App">
      <header>
        <div>
          <h1>Insects Memory Challenge</h1>
          <p>How well can you recognize and remember insects?</p>
          <p>Get points by clicking on insects but don't click on any more than once!</p>
          <p>{selection}</p>
        </div>
        <ScoreBoard />
      </header>
      <MemoryCard handleClick={()=> handleClick()}/>
    </div>
  );
}

export default App;
