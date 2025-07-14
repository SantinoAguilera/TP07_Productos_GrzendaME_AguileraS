import React from 'react'
import { Link } from 'react-router-dom';
import logo from '/src/assets/zarazaLogo.png';
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='bg-dark text-white text-center py-3'>
      <p className="mb-0">© 2025 ZarazaShop. Todos los derechos reservados. Hecho con amor y Bootstrap 5.</p>
      <small></small>
      <div className="d-flex flex-column align-items-center mt-3">
        <Link to="/TP07_Productos_GrzendaME_AguileraS/home">
          <img src={logo} alt="Logo de ZarazaShop" height={50} />
        </Link>

        <div className="d-flex justify-content-center gap-4 mt-2">
          <Link to="/TP07_Productos_GrzendaME_AguileraS/contacto" className="text-white text-decoration-none boton">Contacto</Link>
          <Link to="/TP07_Productos_GrzendaME_AguileraS/quienessomos" className="text-white text-decoration-none boton">Quiénes somos</Link>
        </div>
      </div>
    </footer>
  )
}