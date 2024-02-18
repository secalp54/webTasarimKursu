import React, { useState } from 'react'

function Sayac() {
  const [sayac,setSayac]=useState(0);
  const [zaman,setZaman]=useState(new Date().toLocaleTimeString())
 
  function arttir() {
    
    setSayac(sayac+1);
    console.log(sayac);
  }

  function azalt() {
    setSayac(sayac-1);
    console.log(sayac);
  }
  function saatiGoster(){
    var z=new Date().toLocaleTimeString();
    setZaman(z);
    setInterval(saatiGoster, 1000);
  }
  

  return (
    <div>
        <h1>{zaman}</h1>
        <h1>Sayaç</h1>
        <h3>{sayac}</h3>
        <button onClick={arttir}>Arttır</button>
        <button onClick={azalt}>Azalt</button>

        <button onClick={saatiGoster}>Zamanı Göster</button>
    </div>
  )
}

export default Sayac