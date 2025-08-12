import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css'
import logo from '/src/assets/zarazaLogo.png';
import Carrito from '../assets/carrito negro.png';

function Navbar() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategorias(res.data);
      })
  }, []);
  let categoriaHTML = categorias.map((categoria, index) => {
    return <li key={index}><Link className="dropdown-item" to={"/TP07_Productos_GrzendaME_AguileraS/productos/" + categoria.slug}>{categoria.name}</Link></li>
  })

  return (
    <div className='HeaderBody'>
      <Link to={"/TP07_Productos_GrzendaME_AguileraS"} className='HeaderButton NavbarLogo'><img src={logo} className="HeaderLogo"></img></Link>
      <div className='NavbarCenter'>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/contacto"} className='HeaderButton'>Contacto</Link>
        <button className='HeaderButton' type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to={"/TP07_Productos_GrzendaME_AguileraS/productos/todos"}>Ver todos</Link></li>
          <li><hr className="dropdown-divider"></hr></li>
          {categoriaHTML}
        </ul>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/quienessomos"} className='HeaderButton'>Nosotros</Link>
      </div>
      <button className="HeaderButton"><img src={Carrito}></img></button>
    </div>
  )
}

export default Navbar