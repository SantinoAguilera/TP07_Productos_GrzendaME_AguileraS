import {Link} from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  let categorias = [];
  axios.get("https://dummyjson.com/products/categories")
  .then((res) =>{
    categorias = res.data;
    console.log(res);
  })
  console.log(categorias);

  return (
    <div className='HeaderBody'>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/home"}><img src='src/assets/logo.extension'></img></Link>
        <Link to={"/TP07_Productos_GrzendaME_AguileraS/contacto"}><p>Contacto</p></Link>
        <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to={"/TP07_Productos_GrzendaME_AguileraS/productos"}>Ver todos</Link></li>
          <li><hr className="dropdown-divider"></hr></li>
          {categorias.map((categoria) => {
            <li><Link className="dropdown-item" to={"/TP07_Productos_GrzendaME_AguileraS/productos:" + categoria}>{categoria.name}</Link></li>
          })}
        </ul>
        </div>
          <Link to={"/TP07_Productos_GrzendaME_AguileraS/quienessomos"}><p>Quienes somos</p></Link>
        </div>
  )
}

export default Navbar