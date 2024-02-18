import React from 'react'
import ReactDOM from 'react-dom/client'

const isim="Alper";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Merhaba {isim}</h1>
    <p>Şanslı numaram {Math.floor(Math.random()*10+1)}</p>
  </div>
)
