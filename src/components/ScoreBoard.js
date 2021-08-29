import { useState, useEffect } from 'react';

function ScoreBoard(props) {
  const style = {
    color: "red",
    backgroundColor: "black"
  }
  let [transition, setTransition] = useState(style);
  
//highlight best score when losing game
  useEffect(() => {
    setTransition(style)
    const timeout = setTimeout(() => {
      setTransition(null)
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [props.bestScore])

  return (
    <div className="score">
      <h3>Score: {props.score}</h3>
      <h3 style={transition}>Best Score: {props.bestScore}</h3>
    </div>
  );
}

export default ScoreBoard;