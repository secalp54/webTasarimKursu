import React from 'react'

export default function footer() {
    var yil=new Date().getFullYear();

  return (
   <footer>
    <p>
        Copyright  {yil}
   </p>
   </footer>
  )
}
