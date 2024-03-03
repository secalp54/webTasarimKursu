import React from 'react'
import { Link } from 'react-router-dom'

export default function Linkler() {
  return (
    <div>
        <Link to="/">Anasayfa</Link>
        <Link to="/iletisim">İletisim</Link>
        <Link to="/hakkimda">Hakkımda</Link>
    </div>
  )
}
