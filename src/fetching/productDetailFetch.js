const product_detail_fetch = async (id) => {
    const URL_API_PRODUCTS = 'http://localhost:5173/data/products.json'

    const responseHttp = await fetch(URL_API_PRODUCTS,
        {
            method: 'GET'
        }
    )
    const products = await responseHttp.json()
    const product_found = products.find((products) => {
        return products.id === id
    })

    console.log(product_found)
    return product_found
}

export default product_detail_fetch