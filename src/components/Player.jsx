import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol, playerName)
    }
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