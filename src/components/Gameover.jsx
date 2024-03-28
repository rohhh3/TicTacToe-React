export default function Gameover({winner}){
    return <div id="game-over">
        <h2>Game Over</h2>
        {winner && <p>You won, {winner}</p>}
        {!winner && <p>It's a draw</p>}
        <p>
            <button>Restart</button>
        </p>
    </div>
}