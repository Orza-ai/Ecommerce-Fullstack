import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import useProductId from '../../hooks/useProductId'
import DetailProduct from '../../utils/Product_list/Detail_Product/Detail_product'
import '../../Styles/Detail.css'

const Detail = () => {
    const {isSearching, bookFound} = useProductId()

return (
    <div>
        <Header/>
        <main>
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