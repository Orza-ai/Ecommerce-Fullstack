import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Product_list.css"

const Product_list = (props) => {
    const productsMapeo = props.products.map ((products) =>{
        return(
            <div className="book-container-product-list" key={products.id}>
                <Link to={`/product/detail/${products.id}`}>
                    <img className="book-image-product-list" src={products.img} alt={products.alt}/>
                </Link>
                <div className="book-text-box">
                <Link to={`/product/detail/${products.id}`} className="book-link">
                    <h2 className="book-name-product-list">{products.name}</h2>
                </Link>
                    <h3 className="book-author-product-list">{products.author}</h3>
                    <span className="book-price-product.list">Precio: ${products.price}</span>
                </div>
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