import React from 'react'
import Card from './components/card'
import Image from './components/image'
import veriler from './veriler/veri'

function App() {
  console.log(veriler);
  return (
    <div className='container'>

      

      <Card resim={veriler[0].resim} ad={veriler[0].ad} telefon={veriler[0].telefon} mail={veriler[0].mail}/>

      <Card resim={veriler[1].resim} ad={veriler[1].ad} telefon={veriler[1].telefon} mail={veriler[1].mail}/>
  
      <Card resim={veriler[2].resim} ad={veriler[2].ad} telefon={veriler[2].telefon} mail={veriler[2].mail}/>
     
      <Card resim={veriler[3].resim} ad={veriler[3].ad} telefon={veriler[3].telefon} mail={veriler[3].mail}/>
    </div>
  )
}

export default App
