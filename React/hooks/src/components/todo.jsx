import React,{useState} from 'react'
import arabalar from './arabalar';



//Hooks


function Todo() {

    const [kitapOkundumu,setKitapOkudunmu]=useState(false);

    

    

    
    var ciz={
        textDecoration:"line-through",
        color:"#B5C0D0"
    }

    function okudum(){
        console.log("okudum calıştı");
        setKitapOkudunmu(true);
        console.log(kitapOkundumu);
    }

    function okumadim(){
        console.log("okumadım çalıştı");
        setKitapOkudunmu(false);
        console.log(kitapOkundumu);
    }
  return (
    <div>

        <h4 style={kitapOkundumu?ciz:null}>Bugün kitap okunacak!</h4>
        
        <button onClick={okudum}>Okudum</button>

        <button onClick={okumadim}>Okumadım</button>

    </div>
  )
}

export default Todo;
