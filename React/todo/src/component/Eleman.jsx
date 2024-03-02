import React from 'react'
import { useState } from 'react'

export default function Eleman(props) {

    const [tikladiMi,setTikladiMi]=useState(false)

    function handleClick(params) {
        //burda tiklama işlemini ters çevir
        setTikladiMi((onceki)=>{
            return !onceki
        });

        props.onDelete(props.id);
    }

  return (
    <li onClick={handleClick} 
    style={{textDecoration:tikladiMi===true?"line-through":"none"}} id={props.id}>{props.item}</li>
  )
}
