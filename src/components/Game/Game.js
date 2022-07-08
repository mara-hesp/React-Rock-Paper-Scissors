

const Game = ({ lives, score, message, paper, rock, scissors}) => {


    return (
        <div>
            <div className="counter">
        <div>
          <p>Score:</p>
          <h2>{score}</h2>
        </div> 
        <div>
          <p>Lives:</p>
          <h2>{lives}</h2>
        </div>
        </div>
            <button className="r" onClick={rock}>Rock</button>
            <button className="p" onClick={paper}>Paper</button>
            <button className="s" onClick={scissors}>Scissors</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Game