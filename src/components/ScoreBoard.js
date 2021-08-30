import { useState, useEffect } from 'react';

function ScoreBoard(props) {
  let [transition, setTransition] = useState();
  
//highlight best score when losing game
  useEffect(() => {
    setTransition({
      color: "red",
      backgroundColor: "black"
    })
    const timeout = setTimeout(() => {
      setTransition(null)
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  }, [props.bestScore])

  return (
    <div className="score">
      <h3>Score: {props.score} /40</h3>
      <h3 style={transition}>Best Score: {props.bestScore}</h3>
    </div>
  );
}

export default ScoreBoard;