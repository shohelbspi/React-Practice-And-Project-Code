import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/components/Navbar'

function Layout() {

    return (
        <>

            <Navbar />
            <div className='page '>
                <h2 className='text-[tomato]'>Layout</h2>
                <Outlet />
            </div>

        </>
    )
}

export default Layout
