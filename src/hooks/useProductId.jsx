import { useEffect, useState } from "react"
import product_detail_fetch from "../fetching/productDetailFetch"

const useProductId = () => {
    const [ isSearching, setIsSearching ] = useState(true)
    const [ bookFound, setBookFound ] = useState(null)

    const findBook_id = async () => {
        const book_id = await product_detail_fetch()
        setIsSearching(false)
        setBookFound(book_id)
    }
    useEffect(() => {findBook_id()}, [])

    return{
        isSearching : isSearching,
        bookFound : bookFound
    }
}

export default useProductId