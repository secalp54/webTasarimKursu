import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Hakkimda from './pages/hakkimda'
import Hata from './pages/hata'
import Home from './pages/home'
import Iletisim from './pages/iletisim'
import Kisiler from './pages/kisiler'
import Linkler from './pages/linkler'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Hata/>
  },
  {
    path:"iletisim",
    element:<Iletisim/>
  },
  {
    path:'hakkimda',
    element:<Hakkimda/>
  },
  {
    path:"kisiler",
    element:<Kisiler/>

  },
  {
    path:"kisiler/:kisiID",
    element:<Kisiler/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      
    <RouterProvider router={routes}/>
    </div>
  </React.StrictMode>,
)
