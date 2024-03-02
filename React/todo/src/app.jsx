import React from 'react'
import { useState } from 'react';
import Eleman from './component/Eleman';
import Heading from './component/Heading';

export default function App() {

  const [listem,setListem]=useState([]);//"sinemaya git,markete git"
  const [inputText,setInputText]=useState("");
  var txt="";


  function deleteItem(id){
    console.log(id+"elemanı sil");

    setListem((onceki)=>{
      return onceki.filter((eleman,index)=>{
        return index!=id;
      });
    })

    
    
    


  }

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
        
        <Heading/>

        <div className='form'>
          <input onKeyDown={handleKey} onChange={handleChange} placeholder='Yapılacak is' value={inputText}></input>
          <button onClick={handleClick}><span>Ekle</span> </button>
        </div>
        <ul>
          {
            ////"sinemaya git,markete git,zıpla"
          listem.map((eleman,index)=><Eleman onDelete={deleteItem} item={eleman} id={index}/>)
          }
        </ul>
    </div>
  )
}
