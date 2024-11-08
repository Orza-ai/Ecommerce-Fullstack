const product_detail_fetch = async (id) => {
    const URL_API_PRODUCTS = 'http://localhost:5173/data/products.json';

    const responseHttp = await fetch(URL_API_PRODUCTS, {
        method: 'GET'
    });
    const products = await responseHttp.json();

    // Convierte id a número antes de hacer la comparación
    const product_found = products.find((product) => product.id === Number(id));

    console.log("Producto encontrado:", product_found);
    return product_found;
};

export default product_detail_fetch