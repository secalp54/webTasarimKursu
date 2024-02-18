import React from 'react'
import ReactDOM from 'react-dom/client'

const sehir1="Ankara";
const sehir2="İstanbul";
const sehir3="İzmir";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
          <h1>Gezilecek Yerler</h1>
          <ul>
            <li>{sehir1}</li>
            <li>{sehir2}</li>
            <li>{sehir3}</li>
          </ul>
   </div>
  </React.StrictMode>,
)
