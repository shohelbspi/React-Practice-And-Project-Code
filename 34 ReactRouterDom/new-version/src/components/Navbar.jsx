import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-10 bg-[lightseagreen] py-3'>

        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/help">Help</a> */}


        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link> */}

        <NavLink to="/" className={function({isActive}){
            return(
                isActive ?'text-[tomato]' : ""
            )
        }}>Home</NavLink>

        <NavLink to="/about" className={function({isActive}){
            return(
                isActive ?'text-[tomato]' : ""
            )
        }}>About</NavLink>

        <NavLink to="/contact" className={function({isActive}){
            return(
                isActive ?'text-[tomato]' : ""
            )
        }}>Contact</NavLink>

        <NavLink to="/help" className={function({isActive}){
            return(
                isActive ?'text-[tomato]' : ""
            )
        }}>Help</NavLink>

      
    </div>
  )
}

export default Navbar
