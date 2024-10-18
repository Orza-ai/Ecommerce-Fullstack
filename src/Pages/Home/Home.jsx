import React from 'react'
import useProducts from '../../hooks/useProducts'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Product_list from '../../utils/Product_list/Product_list'
import "../../Styles/Home.css"

const Home = () => {
    const { isLoading, products } = useProducts()



    return (
        <>
            <Header/>
            <main>
                <div className='products-conteiner'>
                {
                    isLoading
                        ? <h2>Cargando</h2>
                        : <Product_list products={products}/>
                }
                </div>
            </main>
            <Footer/>

        </>
    )
}

export default Home