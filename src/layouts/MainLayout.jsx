import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout