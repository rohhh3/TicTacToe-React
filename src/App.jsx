import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
function App() {
  return <>
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='P1' symbol="X" />
          <Player initialName="P2" symbol="O"/>
        </ol>
        <Gameboard />
      </div>
    </main>
  </>
}

export default App
