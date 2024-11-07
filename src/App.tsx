import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Create from "./components/Create/Create"
import Home from "./components/Home/Home"
import Product from "./components/Product/Product"
import Edit from "./components/editUser/Edit"
import Basket from "./components/Basket/Basket"
import Favorite from "./components/Favorite/Favorite"



function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element= {<Create/>}/>
        <Route path="/product" element= {<Product/>}/>
        <Route path='/edit/:id' element= {<Edit/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </>
  )
}

export default App
