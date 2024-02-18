import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

var zaman=new Date();
var suankiSaat=zaman.getHours();
var className="";
if (suankiSaat<12){
  className="sabah";
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container d-flex justify-content-around mt-5 yukseklik align-items-center'>
    <div className={className}>
      <h1>Lorem Picsum</h1>
      <p>The Lorem Ipsum for photos</p>
    </div>
    <div className='sag'>
      <img src="https://picsum.photos/400/300" alt="" />
    </div>
  </div>

)
