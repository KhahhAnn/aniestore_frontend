import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import Cart from '../components/cart/Cart'
import Navigation from '../components/navigation/Navigation'
import Fotter from '../components/footer/Fotter'
import Product from '../components/product/Product'
import ProductDeatil from '../components/productDetail/ProductDetail'
import CheckOut from '../components/checkout/CheckOut'
import Order from '../components/order/Order'
import OrderDetail from '../components/order/OrderDetail'

const CustomerRouters = () => {
   return (
      <div>
         <div>
            <Navigation />
         </div>
         <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/login' element={<HomePage />}></Route>
            <Route path='/register' element={<HomePage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDeatil />}></Route>
            <Route path='/checkout' element={<CheckOut />}></Route>
            <Route path='/account/order' element={<Order />}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail />}></Route>
         </Routes>
         <div>
            <Fotter />
         </div>
      </div>
   )
}

export default CustomerRouters