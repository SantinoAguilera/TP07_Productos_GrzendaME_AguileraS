import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from '../pages/Home'

function MainLayout() {
    return (
        <>
            <div className='HeaderBody'>
                <Link to={"/TP07_Productos_GrzendaME_AguileraS/home"}><img src='src/assets/logo.extension'></img> </Link>
                <Link to={"/TP07_Productos_GrzendaME_AguileraS/contacto"}><img src='src/assets/logo.extension'></img> </Link>
                <Link to={"/TP07_Productos_GrzendaME_AguileraS/productos"}><img src='src/assets/logo.extension'></img> </Link>
                <Link to={"/TP07_Productos_GrzendaME_AguileraS/quienessomos"}><img src='src/assets/logo.extension'></img> </Link>
            </div>
            <Outlet />
        </>
    )
}

export default MainLayout