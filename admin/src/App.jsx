import './App.css'
import CreateProduct from './createProduct/CreateProduct'
import { Routes, Route } from "react-router-dom"
import ListProduct from './listProduct/ListProduct'
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className='adminContainer'>
        <Routes>
          <Route path='/' element={<CreateProduct />} />
          <Route path='/add' element={<CreateProduct />} />
          <Route path='/products' element={<ListProduct />} />
          <Route />
        </Routes>
      </div>
    </>

  )
}

export default App
