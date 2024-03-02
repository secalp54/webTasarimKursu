import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes,setNotes]=useState([{title:"Merhaba",content:"Sinemaya gidilecek"}]);

  function notuSil(id){
    setNotes((onceki)=>{
      return onceki.filter((eleman,index)=>{
        return index!==id
      })
    })
  }
  function noteEkle(note){
    setNotes((onceki)=>{
      return [...onceki,note]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={noteEkle} />
      {
        notes.map((eleman,index)=>{
          return <Note onDelete={notuSil} key={index} id={index} title={eleman.title} content={eleman.content} />
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
