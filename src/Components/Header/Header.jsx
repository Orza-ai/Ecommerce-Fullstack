import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../Styles/Header.css'

const Header = () => {
return (
    <>
        <div className='monitor-header'>
            <div className='top-header'>
                <Navbar/>
            </div>
            <div className='bottom-header'>
                <form>
                    <div>
                        <label htmlFor="search_bar" className='header-label'>Buscar por:</label>
                        <input id="search_bar" type='text' className='header-input' placeholder='Nombre, Categoría o ISBN'></input>
                    </div>  
                </form>
            </div>
        </div>

        <div className='medium-header'>
            <div className='top-header-medium'>
                <Navbar/>
            </div>
            <div className='bottom-header-medium'>
                <form>
                    <div>
                        <label htmlFor="search_bar" className='header-label-medium'>Buscar por:</label>
                        <input id="search_bar" type='text' className='header-input-medium' placeholder='Nombre, Categoría o ISBN'></input>
                    </div>  
                </form>
            </div>
        </div>

        <div className='mobile-header'>
            <div className='top-header-mobile'>
                <Navbar/>
            </div>
            <div className='bottom-header-mobile'>
                <form>
                    <div>
                        <label htmlFor="search_bar" className='header-label-mobile'>Buscar por:</label>
                        <input id="search_bar" type='text' className='header-input-mobile' placeholder='Nombre, Categoría o ISBN'></input>
                    </div>  
                </form>
            </div>
        </div>
    </>
)
}

export default Header