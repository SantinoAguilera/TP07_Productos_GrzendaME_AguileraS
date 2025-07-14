import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel.jsx'

function ProductoDetalle() {
  const { id } = useParams();

  //Usá `https://dummyjson.com/products/${id}` para obtener el producto

  return (
    <>
      <h2>{producto.title}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: ${producto.price}</p>
      <Carrousel images={producto.images}/>
      {/*<img src={producto.images[0]} alt={producto.title} /> {/* si podés hace un carrousel con todas las imágenes */}
      <p>{producto.description}</p>
      {/* Acá falta mucha data de los productos */}
    </>
  )
}

export default ProductoDetalle