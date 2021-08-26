import './style/App.css';
import MemoryCard from './components/MemoryCards'
import ScoreBoard from './components/ScoreBoard'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Insects Memory Challenge</h1>
          <p>How well can you recognize and remember insects?</p>
          <p>Get points by clicking on insects but don't click on any more than once!</p>
        </div>
        <ScoreBoard />
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
