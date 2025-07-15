import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel.jsx'
import axios from 'axios';

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
    <>
      <h2>{producto.title}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: ${producto.price}</p>
      <Carousel images={producto.images} />
      <p>{producto.description}</p>
      {/* Acá falta mucha data de los productos */}
    </>
  )
}

export default ProductoDetalle