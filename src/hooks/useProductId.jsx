import { useEffect, useState } from "react"
import product_detail_fetch from "../fetching/productDetailFetch"
import { useParams } from "react-router-dom"

const useProductId = () => {
    const [ isSearching, setIsSearching ] = useState(true)
    const [ bookFound, setBookFound ] = useState([])

    const { id } = useParams();


    const findBook_id = async () => {
        const book_id = await product_detail_fetch(id)
        setIsSearching(false)
        setBookFound(book_id)
    }

    useEffect(() => {
        if (id) {
            findBook_id();
        }
    }, [id]);

    return{
        isSearching : isSearching,
        bookFound : bookFound
    }
}

export default useProductId