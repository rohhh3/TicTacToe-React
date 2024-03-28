import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Gameover from "./components/Gameover.jsx"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const PLAYERS = {
  X: 'P1',
  O: 'P2'
}

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

function deriveWinner(gameboard, players){
  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameboard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
      winner = players[firstSquareSymbol]
    }
  }
  return winner
}

function deriveGameboard(gameTurns){
  let gameboard = [...INITIALGAMEBOARD.map(arr => [...arr])]
  for(const turn of gameTurns){
      const { square, player } = turn
      const { row, col } = square

      gameboard[row][col] = player
  }
  return gameboard
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer  = deriveActivePlayer(gameTurns)
  const gameboard     = deriveGameboard(gameTurns)
  const winner        = deriveWinner(gameboard, players)
  const hasDraw       = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player:  currentPlayer}, ...prevTurns]
      return updatedTurns
    });
  }

  function handelRestart(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers, 
        [symbol]: newName
      }
    })
  }

  return <>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <Gameover winner={winner} onRestart={handelRestart} />}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameboard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  </>
}

export default App