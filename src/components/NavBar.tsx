import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import dsv_img from '../components/images/dsv.png'
import '../App.css'
const NavBar = () => {
  return (
    <>
      <nav className='nav_background'>
        <div className='nav-items'>
          <div >
            <Link to="/" className='text_color'>Search</Link>
          </div>
          <div>
            <Link to="/count" className='text_color'>Count</Link>
          </div>
          
          <div className='img_style'>
            <img src={dsv_img} alt="dsv_img"/>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default NavBar