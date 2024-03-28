import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e){
    // console.log(e)
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span class="player-name">{playerName}</span>
  let btnCaption = "Edit"

  if(isEditing){
    editablePlayerName =  <input type="text" value={playerName} required onChange={handleChange} />
    btnCaption="Save"
  }
  
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span class="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
