import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function uygulama() {
    const [sayac,setSayac]=useState(0);
    const [toplam,setToplam]=useState(10);
    useEffect(()=>{
       

    },[sayac,toplam])

  return (
    <div>uygulama</div>
  )
}
