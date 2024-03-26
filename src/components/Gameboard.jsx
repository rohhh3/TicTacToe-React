const INITIALGAMEBOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard(){
    return <ol id='game-board'>
        {INITIALGAMEBOARD.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button>{playerSymbol}</button>
                </li>)}
            </ol>
        </li> )}
    </ol>
}