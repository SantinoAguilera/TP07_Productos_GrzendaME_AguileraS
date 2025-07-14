import React from 'react'
import { Link } from 'react-router-dom'

export default function Producto(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>Categoría: {props.category}</p>
            <p>Precio: ${props.price}</p>
            <img src={props.thumbnail} alt={props.title} />
            <Link to={`/TP07_Productos_GrzendaME_AguileraS/productodetalle/${props.id}`}>Ver más</Link>
        </>
    )
}
