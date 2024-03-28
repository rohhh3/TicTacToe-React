import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const INITIALGAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


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

  let gameboard = INITIALGAMEBOARD
  for(const turn of gameTurns){
      const { square, player } = turn
      const { row, col } = square

      gameboard[row][col] = player
  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameboard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
      winner = firstSquareSymbol
    }
  }

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
        {winner && <p>You won, {winner}</p>}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameboard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  </>
}

export default App
