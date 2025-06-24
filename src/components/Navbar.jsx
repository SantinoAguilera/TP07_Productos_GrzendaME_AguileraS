import React from 'react'

function Navbar() {
  return (
  <div className='HeaderBody'>
    <Link to={"/TP07_Productos_GrzendaME_AguileraS/home"}><img src='src/assets/logo.extension'></img> </Link>
    <Link to={"/TP07_Productos_GrzendaME_AguileraS/contacto"}><img src='src/assets/logo.extension'></img> </Link>
    <Link to={"/TP07_Productos_GrzendaME_AguileraS/productos"}><img src='src/assets/logo.extension'></img> </Link>
    <Link to={"/TP07_Productos_GrzendaME_AguileraS/quienessomos"}><img src='src/assets/logo.extension'></img> </Link>
    </div>
  )
}

export default Navbar