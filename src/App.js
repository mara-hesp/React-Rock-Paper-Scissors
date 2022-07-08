import './App.css';
import { useState } from 'react';
import Win from './components/Win/Win';
import Lose from './components/Lose/Lose';
import Game from './components/Game/Game';


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
        setLives(lives - 1)
    } else if (cpu >= 6) {
        setMessage("¡Ganaste!")
        setScore(score + 1)
    }
    }
  
    const btnPaper = () => {
  
      cpu = Math.floor(Math.random() * 9)
  
      if (cpu < 3) {
        setMessage("¡Ganaste!")
        setScore(score + 1)
    } else if (cpu < 6) {
        setMessage("Empate")
    } else if (cpu >= 6) {
        setMessage("Ganó CPU")
        setLives(lives - 1)
    }
    }
  
    const btnScissors = () => {
  
      cpu = Math.floor(Math.random() * 9)
  
      if (cpu < 3) {
        setMessage("Ganó CPU")
        setLives(lives - 1)
    } else if (cpu < 6) {
        setMessage("¡Ganaste!")
        setScore(score + 1)
    } else if (cpu >= 6) {
        setMessage("Empate")
    }
    }

    function refreshPage() {
      window.location.reload(false);
    }

  return (
    <div className="App">
      {lives < 0 ? <Lose btn={refreshPage}/>
      : score > 3 ? <Win btn={refreshPage}/>
      : <Game rock={btnRock} paper={btnPaper} scissors={btnScissors} message={message} score={score} lives={lives}/>}
    </div>
  );
}

export default App;
