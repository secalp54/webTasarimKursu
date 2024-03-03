import React from 'react'
import { useParams } from 'react-router-dom'

export default function Kisiler() {
    const kisiler=["Ahmet","Mehmet","Ali"]
    const secilen=useParams()
    console.log(secilen)
  return (
    <div>Seçilen kisi {kisiler[secilen.kisiID]}</div>
  )
}
