import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import { useState } from "react"

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player:  currentPlayer}, ...prevTurns]
      return updatedTurns
    });
  }

  return <>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='P1' symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="P2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  </>
}

export default App
