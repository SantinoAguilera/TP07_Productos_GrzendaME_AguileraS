import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductoDetalle.css';

function ProductoDetalle() {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducto(res.data);
      })
  }, [id]);

  return (
    <div className="producto-detalle-container">
      <h2 className="producto-detalle-titulo">{producto.title}</h2>
      <p className="producto-detalle-categoria">Categoría: <span>{producto.category}</span></p>
      <Carousel images={producto.images} />
      <p className="producto-detalle-descripcion">{producto.description}</p>
      <Link className="producto-detalle-boton" to="/TP07_Productos_GrzendaME_AguileraS">Añadir al carrito</Link>
      <p className="producto-detalle-precio">Precio: ${producto.price}</p>
      <p className="producto-detalle-stock">Stock: <span>{producto.stock}</span></p>
      <p className="producto-detalle-tags">Tags: <span>{producto.tags?.join(', ')}</span></p>
    </div>
  )
}

export default ProductoDetalle