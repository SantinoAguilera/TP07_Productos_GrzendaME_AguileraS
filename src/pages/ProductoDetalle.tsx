import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductoDetalle.css';
import { useCart } from '../context/CartContext';

type CartItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  thumbnail?: string;
  title: string;
};

type ProductoType = {
  id: number,
  name: string,
  title: string,
  category: string,
  images: string[],
  description: string,
  price: number,
  stock: number,
  tags: string[],
  quantity: number
}

function ProductoDetalle() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState<ProductoType>();
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducto(res.data);
      })
  }, [id]);

  if (!producto) {
    return <p>Cargando producto</p>;
  }

  let addProducto: CartItem = producto;

  return (
    <div className="producto-detalle-container">
      <h2 className="producto-detalle-titulo">{producto.title}</h2>
      <p className="producto-detalle-categoria">Categoría: <span>{producto.category}</span></p>
      <Carousel images={producto.images} />
      <p className="producto-detalle-descripcion">{producto.description}</p>
      <button onClick={() => addToCart(addProducto)} className="producto-detalle-boton">Añadir al carrito</button>
      <p className="producto-detalle-precio">Precio: ${producto.price}</p>
      <p className="producto-detalle-stock">Stock: <span>{producto.stock}</span></p>
      <p className="producto-detalle-tags">Tags: <span>{producto.tags?.join(', ')}</span></p>
    </div>
  )
}

export default ProductoDetalle