import { useState } from 'react'

var kullaniciVarmi=true;

function App() {

  

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className='col-6'>

        <h2>Kullanıcı Girişi</h2>
      <div className="input-group input-group-lg mb-2">
        
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Kullanıcı Adı' />
      </div>

      <div className="input-group input-group-lg mb-2">
        
        <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Şifre' />
      </div>

      {!kullaniciVarmi&& <div className="input-group input-group-lg mb-2">
        
        <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Şifre Tekrar' />
      </div>}
     
      {/* kullanıcı var ise Giriş yap kullanıcı yok ise Kaydol */}
         <button className='btn btn-primary'>{kullaniciVarmi?"Giriş Yap":"Kaydol"}</button>
      </div>

    </div>
  )
}

export default App
