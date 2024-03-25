import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  let playerName = <span class="player-name">{name}</span>
  let btnCaption = "Edit"

  if(isEditing){
    playerName =  <input type="text" value={name} required />
    btnCaption="Save"
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span class="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}