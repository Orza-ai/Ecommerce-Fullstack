import React from 'react'
import '../../Styles/Footer.css'

const Footer = () => {
return (
    <>
        <div  className='footer-container'>
            <div className='footer-box'>
                <h3 className='column-name-footer'>Guia de compra</h3>
                <span>Compre su producto</span>
                <span>Y ya</span>
                <span>Deje de estar chingando</span>
            </div>
            <div className='footer-box'>
                <h3 className='column-name-footer'>Productos</h3>
                <span>Libros por tema</span>
            </div>
            <div className='footer-box'>
                <h3 className='column-name-footer'>Contacto</h3>
                <span>lospolloshermanosfamily@gmail.com</span>
                <span>Venado Tuerto 112</span>
                <span>1108003000</span>
            </div>
            <div className='footer-box'>
                <h3 className='column-name-footer'>Metodos de pago</h3>
                <p>iconos de metodos de pago</p>
            </div>
        </div>

        <div  className='footer-container-mobile'>
            <div className='footer-box-mobile'>
                <h3 className='column-name-footer-mobile'>Guia de compra</h3>
                <span>Compre su producto</span>
                <span>Y ya</span>
                <span>Deje de estar chingando</span>
            </div>
            <div className='footer-box-mobile'>
                <h3 className='column-name-footer-mobile'>Productos</h3>
                <span>Libros por tema</span>
            </div>
            <div className='footer-box-mobile'>
                <h3 className='column-name-footer-mobile'>Contacto</h3>
                <span>lospolloshermanosfamily@gmail.com</span>
                <span>Venado Tuerto 112</span>
                <span>1108003000</span>
            </div>
            <div className='footer-box-mobile'>
                <h3 className='column-name-footer-mobile'>Metodos de pago</h3>
                <p>iconos de metodos de pago</p>
            </div>
        </div>


    </>
)
}

export default Footer