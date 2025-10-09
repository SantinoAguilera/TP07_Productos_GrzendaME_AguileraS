import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout