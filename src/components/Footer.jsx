import React from 'react'

export default function Footer() {
  return (
    <div className='FooterBody'>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/home"}><img src='src/assets/logo.extension'></img></Link>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/contacto"}><p>Contacto</p></Link>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/quienessomos"}><p>Quienes somos</p></Link>
    </div>
  )
}