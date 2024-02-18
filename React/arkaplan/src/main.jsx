import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'

var classIsmi="container-fluid yukseklik ";

var suankiZaman=new Date();
var suankiSaat=suankiZaman.getHours();
var mesaj="";
console.log(suankiSaat);
if (suankiSaat<12){
  classIsmi+="sabah";
  mesaj="Günaydın.";
}else if (suankiSaat<18){
  classIsmi+="ogle";
  mesaj="Tünaydın";
}else{
  classIsmi+="aksam";
  mesaj="İyi Akşamlar";
}


ReactDOM.createRoot(document.getElementById('root')).render(
<div className={classIsmi}>
  <div className='yukseklik d-flex justify-content-center align-items-center '>
    <h1>{mesaj}</h1></div>
</div>
)
