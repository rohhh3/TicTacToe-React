const INITIALGAMEBOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Gameboard({onSelectSquare, turns}){
    let gameboard = INITIALGAMEBOARD
    for(const turn of turns){
        const { square, player } = turn
        const { row, col } = square

        gameboard[row][col] = player
    }
    return <ol id='game-board'>
        {gameboard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li> )}
    </ol>
}