import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import Cart from '../components/cart/Cart'
import Navigation from '../components/navigation/Navigation'
import Fotter from '../components/footer/Fotter'
import Product from '../components/product/Product'
import ProductDeatil from '../components/productDetail/ProductDetail'
import CheckOut from '../components/checkout/CheckOut'
import Order from '../components/order/Order'
import OrderDetail from '../components/order/OrderDetail'
import AboutPage from '../pages/aboutPage/AboutPage'
import ContactPage from '../pages/contactPage/ContactPage'
import BlogPage from '../pages/blogPage/BlogPage'
import FAQSPage from '../pages/faqsPage/FAQSPage'
import ProfilePage from '../pages/profilePage/ProfilePage'
import ChatComponent from '../components/test.js'
import BannerPage from '../pages/bannerPage/banner.js'

const CustomerRouters = () => {
   const location = useLocation();
   const isRootPath = location.pathname === '/';

   return (
      <div>
         {!isRootPath && (
            <div className='fixed w-full top-0 z-40'>
               <Navigation />
            </div>
         )}
         <Routes>
            <Route path='/' element={<BannerPage />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/chat' element={<ChatComponent />}></Route>
            <Route path='/login' element={<HomePage />}></Route>
            <Route path='/shop' element={<Product />}></Route>
            <Route path='/register' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/contact-us' element={<ContactPage />}></Route>
            <Route path='/blog' element={<BlogPage />}></Route>
            <Route path='/faqs' element={<FAQSPage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductDeatil />}></Route>
            <Route path='/checkout' element={<CheckOut />}></Route>
            <Route path='/account/order' element={<Order />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail />}></Route>
         </Routes>
         {!isRootPath && (
            <div>
               <Fotter />
            </div>
         )}
      </div>
   )
}

export default CustomerRouters
