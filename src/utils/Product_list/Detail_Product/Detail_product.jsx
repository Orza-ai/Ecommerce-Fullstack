import React from "react";

const DetailProduct = (props) => {
    const detailMapeo = props.bookFound.map ((bookFound) => {
        return(
            <div key={bookFound.id}>
                <h2 className="book-name">{bookFound.name}</h2>
                <h3 className="book-author">{bookFound.author}</h3>
                <img className="book-image" src={bookFound.img} alt={bookFound.alt} />
                <span className="book-price">Precio: ${bookFound.price}</span>
                <span className="book-category">Categoria: {bookFound.category}</span>
                <span className="book-isbn">ISBN: {bookFound.ISBN}</span>
            </div>
        )
    })
    return(
        <>
        {detailMapeo}
        </>
    )
}

export default DetailProduct