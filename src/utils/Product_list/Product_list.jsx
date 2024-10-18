import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Product_list.css"

const Product_list = (props) => {
    const productsMapeo = props.products.map ((products) =>{
        return(
            <div className="book-container-product-list" key={products.id}>
                <img className="book-image-product-list" src={products.img} alt={products.alt} />
                <div className="book-text-box">
                    <h2 className="book-name-product-list">{products.name}</h2>
                    <h3 className="book-author-product-list">{products.author}</h3>
                    <span className="book-price-product.list">Precio: ${products.price}</span>
                </div>
                <Link to={`/product/detail/${products.id}`} className="book-detail-link-product-list">Ver detalle</Link>
            </div>
        )
    })
    return(
        <>
        {productsMapeo}
        </>
    )
}

export default Product_list