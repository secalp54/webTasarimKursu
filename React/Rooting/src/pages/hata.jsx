import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Hata() {
    const error=useRouteError()
    console.log(error);
  return (
    <div>Bir hata ile karşılaşıldı{error.data} </div>
  )
}
