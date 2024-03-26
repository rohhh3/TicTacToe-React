import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import { useState } from "react"
function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) =>  curActivePlayer === 'X' ? 'O' : 'X');
  }

  return <>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='P1' symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="P2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  </>
}

export default App
