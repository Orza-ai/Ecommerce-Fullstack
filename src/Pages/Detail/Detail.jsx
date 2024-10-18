import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import useProductId from '../../hooks/useProductId'
import DetailProduct from '../../utils/Product_list/Detail_Product/Detail_product'

const Detail = () => {
    const {isSearching, bookFound} = useProductId()

return (
    <div>
        <Header/>
        <main>
            <h1>Contenido de detail</h1>
            {
                isSearching
                ? <h2> Looking for your book... </h2>
                : <DetailProduct bookFound={bookFound}/>
            }

        </main>
        <Footer/>
    </div>
)
}

export default Detail