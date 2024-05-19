import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Allproduct from './pages/allproducts/Allproduct'
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/Nopage';
import MyState from "./context/myState"
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import Addproduct from './pages/admin/dashboard/page/Addproduct';
import UpdateProduct from './pages/admin/dashboard/page/UpdateProduct';
function App() {
  return (
   <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/allproducts" element={<Allproduct/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/productInfo/:id" element={<ProductInfo/>} />
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/updateproduct" element={<UpdateProduct/>} />
      </Routes>
    </Router>
    </MyState>

  )
}

export default App