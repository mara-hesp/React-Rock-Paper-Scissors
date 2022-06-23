import './App.css';
import { useState } from 'react'


function App() {
  const [score, setScore] = useState(0)
    const [lives, setLives] = useState(3)
    const [message, setMessage] = useState('')
  
    let cpu
  
    const btnRock = () => {
  
      cpu = Math.floor(Math.random() * 9)
  
      if (cpu < 3) {
        setMessage("Empate")
    } else if (cpu < 6) {
        setMessage("Ganó CPU")
        if (lives > 0) setLives(lives - 1)
    } else if (cpu >= 6) {
        setMessage("¡Ganaste!")
        if (score < 3) setScore(score + 1)
    }
    }
  
    const btnPaper = () => {
  
      cpu = Math.floor(Math.random() * 9)
  
      if (cpu < 3) {
        setMessage("¡Ganaste!")
        if (score < 3) setScore(score + 1)
    } else if (cpu < 6) {
        setMessage("Empate")
    } else if (cpu >= 6) {
        setMessage("Ganó CPU")
        if (lives > 0) setLives(lives - 1)
    }
    }
  
    const btnScissors = () => {
  
      cpu = Math.floor(Math.random() * 9)
  
      if (cpu < 3) {
        setMessage("Ganó CPU")
        if (lives > 0) setLives(lives - 1)
    } else if (cpu < 6) {
        setMessage("¡Ganaste!")
        if (score < 3) setScore(score + 1)
    } else if (cpu >= 6) {
        setMessage("Empate")
    }
    }



  return (
    <div className="App">
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
            <button className="r" onClick={btnRock}>Rock</button>
            <button className="p" onClick={btnPaper}>Paper</button>
            <button className="s" onClick={btnScissors}>Scissors</button>
            <h1>{message}</h1>
    </div>
  );
}

export default App;
