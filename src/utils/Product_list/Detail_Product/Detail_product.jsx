import React from "react";

const DetailProduct = (props) => {
    const { bookFound } = props;

    return (
        <>
            <div className="book-box">
                <img className="book-image" src={bookFound.img} alt={bookFound.alt}/>
                <div className="book-info-box">
                    <h2 className="book-name">{bookFound.name}</h2>
                    <h3 className="book-author">{bookFound.author}</h3>
                    <span className="book-price">Precio: ${bookFound.price}</span>
                    <span className="book-category">Categoria: {bookFound.category}</span>
                    <span className="book-isbn">ISBN: {bookFound.ISBN}</span>
                </div>
            </div>
            <div className="book-description">
                <span className="descripcion-word">Descripción</span>
                <div className="book-sinopsis">
                    <span>Sinopsis del producto</span>
                    <p>
                        {bookFound.description}
                    </p>
                </div>
            </div>
    </>
    );
};

export default DetailProduct;