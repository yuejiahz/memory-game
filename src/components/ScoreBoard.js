
function ScoreBoard(props) {
    return (
      <div className="score">
          <h3>Score: {props.score}</h3>
          <h3>Best Score: {props.bestScore}</h3>
      </div>
    );
  }
  
  export default ScoreBoard;