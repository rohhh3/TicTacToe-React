import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import { useState } from "react"
function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer) =>  curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X'
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }
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
    </main>
  </>
}

export default App
