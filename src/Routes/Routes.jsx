import { Route, Routes } from "react-router-dom"
import { Detail, Error, Home, LoginRegister } from "../Pages"
import Carrito from "../Components/Carrito/Carrito"

const RunPages = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Error/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/micarrito" element={<Carrito/>} />
            <Route path="/product/detail/:id" element={<Detail/>} />
            <Route path="/micuenta" element={<LoginRegister/>} />
        </Routes>
    )
}

export default RunPages