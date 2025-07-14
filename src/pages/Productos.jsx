import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Producto from '../components/Producto';

function Productos() {
  let { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    let url = "https://dummyjson.com/products/category/" + categoria + "?limit=0&select=title,category,price,thumbnail";
    if (categoria == "todos") url = "https://dummyjson.com/products?limit=0&select=title,category,price,thumbnail";
    axios.get(url)
      .then((res) => {
        setProductos(res.data.products);
      })
  }, [categoria]);
  let productosHTML = productos.map((producto, index) => {
    return <Producto key={index} title={producto.title} category={producto.category} price={producto.price} thumbnail={producto.thumbnail} id={producto.id} />;
  })

  return (
    <>
      {productosHTML}
    </>
  )
}

export default Productos