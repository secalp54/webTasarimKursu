import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note,setNote]=useState({title:"",content:""})

  function ekle(e){
    e.preventDefault();
    props.onAdd(note);
    setNote({title:"",content:""})
  }

  function handleChange(e){
    console.log(e.target);
    const {name,value}=e.target;
    setNote((onceki)=>{
      return {...onceki,  //{title:"",content:"",title:eieala}
      [name]:value 
      }
    })
   
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={ekle}>Ekle</button>
      </form>
    </div>
  );
}

export default CreateArea;
