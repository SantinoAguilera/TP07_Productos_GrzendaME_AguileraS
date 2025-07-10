import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Productos() {
  let { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    let url = "https://dummyjson.com/products/category/" + categoria + "?limit=0";
    if (categoria == "todos") url = "https://dummyjson.com/products?limit=0";
    axios.get(url)
      .then((res) => {
        setProductos(res.data.products);
      })
  }, [categoria]);
  let productosHTML = productos.map((producto, index) => {
    return <div key={index}>{producto.title}</div>
  })

  return (
    <>
      {productosHTML}
    </>
  )
}

export default Productos