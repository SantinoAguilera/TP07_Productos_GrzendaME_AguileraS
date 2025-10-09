import React from 'react'
import { Link } from 'react-router-dom'
import Carrito from '../assets/carrito.png'
import './Producto.css'
import { useCart } from '../context/CartContext.jsx'
import PropTypes from 'prop-types'

type ProductProps = {
    name: string,
    quantity: number,
    thumbnail: string;
    title: string;
    category: string;
    price: number;
    id: number;
}

type CartItem = {
    id: number;
    name: string;
    price: number;
    category: string;
    quantity: number;
};

export default function Producto(props: ProductProps) {
    const { addToCart } = useCart();

    let addProduct: CartItem = props;

    return (
        <div className="producto-card card m-2">
            <img src={props.thumbnail} alt={props.title} className="card-img-top producto-img" />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text mb-1">Categoría: {props.category}</p>
                <p className="card-text mb-2">Precio: ${props.price}</p>
                <button onClick={() => addToCart(props)} className='btn btn-primary mt-auto boton-ver-mas boton-carrito'><img src={Carrito}></img></button>
                <Link to={`/TP07_Productos_GrzendaME_AguileraS/productodetalle/${props.id}`} className="btn btn-primary mt-auto boton-ver-mas">Ver más</Link>
            </div>
        </div>
    )
}

