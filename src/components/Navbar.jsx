import React from 'react'

function Navbar() {
  return (
    <div className='HeaderBody'>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/home"}><img src='src/assets/logo.extension'></img></Link>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/contacto"}><p>Contacto</p></Link>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/productos"}>{/* Dropdown va aquí, creo */}</Link>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/quienessomos"}><p>Quienes somos</p></Link>
    </div>
  )
}

export default Navbar