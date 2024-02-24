import React, { useState } from 'react'



function App() {

  const [fullName,setFullName]=useState({fname:"Alper",lname:"Albostan"});


  const [sayac,setSayac]=useState(0);

  function arttir(e) {
    e.preventDefault();
   
    setSayac((prev)=>{
        if (prev===30){
          return 0;
        }
        return  prev+5;
    });
  }
  const age="yas"
  const elaman={fname:"Alper",lname:"Albostan",[age]:40,age:45}

  const kisi={...elaman,age:40}

  



  function handleClick(e) {
    var ozellikAdi=e.target.name; //fname
    var metin=e.target.value;//ayse
    //fname:"alper",lname:"albostan"
    setFullName((onceki)=>{
      return {...onceki,[ozellikAdi]:metin}
      //{fname:"alper",lname:"albostan",fname:"ayse"}
    })
    console.log(fullName);
    // if (ozellikAdi==="fname"){
    //   setFullName((onceki)=>{
    //    return {fname:metin,lname:onceki.lname}
    //   });
    // }else{
    //   setFullName((onceki)=>{
    //     return {fname:onceki.fname,lname:metin}
    //    });
    // }
  }

  return (
    <>
      <div className="container">
    <h1>Merhaba {fullName.fname}  {fullName.lname} </h1>
    <h3>{sayac}</h3>
      <form>
        <input onChange={handleClick} name="fname" placeholder="Adınız" />
        <input onChange={handleClick}  name="lname" placeholder="Soyadınız" />
        <input onChange={handleClick}  name="ename" placeholder="Mail Adresiniz" />
        <button onClick={arttir}>Giriş Yap</button>
      </form>
  </div>
      
    </>
  )
}

export default App
