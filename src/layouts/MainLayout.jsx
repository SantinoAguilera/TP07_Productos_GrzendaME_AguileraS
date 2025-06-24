import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <div>MainLayout</div>
            <Outlet />
        </>
    )
}

export default MainLayout