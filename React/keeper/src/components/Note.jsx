import React from "react";

function Note(props) {

  function sil(params) {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={sil}>SİL</button>
    </div>
  );
}

export default Note;