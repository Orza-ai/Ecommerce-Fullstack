import React from 'react'
import '../../Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <>
        <div className='nav-container-monitor'>
            <nav className='navbar-monitor'>
                <Link to={'/home'} className='nav-bookstore-logo-monitor'>BookStore.</Link>
                <div className='icons-container-monitor'>
                    <Link to={'/micuenta'} className='my-account-monitor'>🚹</Link>
                    <Link to={'/micarrito'} className='see-carrito-monitor'>🛒</Link>
                </div>
            </nav>
        </div>

        <div className='nav-container-mobile'>
            <nav className='navbar-mobile'>
                <Link to={'/home'} className='nav-bookstore-logo-mobile'>BookStore.</Link>
                <div className='icons-container-mobile'>
                    <Link to={'/micuenta'} className='my-account-mobile'>🚹</Link>
                    <Link to={'/micarrito'} className='see-carrito-mobile'>🛒</Link>
                </div>
            </nav>
        </div>
    </>
)
}

export default Navbar