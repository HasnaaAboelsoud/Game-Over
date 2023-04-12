import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Lauout() {
    return (<>
        <Navbar/>
        <div className='bg min-vh-100'>
            <div className='container-lg vh-100 pt-5'>
                <Outlet />
            </div>
        </div>
    </>
    )
}
