import React from 'react'
import { useState } from 'react';

export default function App() {

  const [listem,setListem]=useState([]);
  const [inputText,setInputText]=useState("");
  var txt="";

  function handleKey(e){
    if (e.keyCode===13){
      handleClick();
    }
  }

  function handleChange(e) {
    //e.target.value özelliği ile input içine yazılan yazıyı alırız.
    setInputText(e.target.value);
    
  }
  function handleClick(){
    setListem((onceki)=>{
      return [inputText,...onceki]
    });
    console.log(listem);
    setInputText("");
   
  }

  return (
    <div className='container'>
        <div className='heading'>
          <h1>Yapılacaklar Listesi</h1>
        </div>

        <div className='form'>
          <input onKeyDown={handleKey} onChange={handleChange} placeholder='Yapılacak is' value={inputText}></input>
          <button onClick={handleClick}><span>Ekle</span> </button>
        </div>
        <ul>
          {
          listem.map((eleman,index)=><li key={index}>{eleman}</li>)
          }
        </ul>
    </div>
  )
}
