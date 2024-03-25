export default function Player({name, symbol}){
    return <>
        <li>
            <span className="player">
              <span class="player-name">{name}</span>
              <span class="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    </>
}