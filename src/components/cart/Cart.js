import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../../state/cart/Action'
import CartItem from './CartItem'

const Cart = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {cartStore} = useSelector(Store => Store)
   const [sortedCartItems, setSortedCartItems] = useState([]);

   
   const handleCheckOut = () => {
      navigate("/checkout?step=2")
   }

   useEffect(() => {
      dispatch(getCart())
   }, [cartStore.cartItems,  dispatch])
   
   return (
      <div className='mt-4'>
         <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
               {cartStore.cart &&cartStore.cart?.cartItem && cartStore.cart?.cartItem.map((item, index) =>  <CartItem productItem={item} key={index} />)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
               <div className='border p-5'>
                  <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                  <hr />
                  <div className='space-y-3 font-semibold'>
                     <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>${cartStore.cart?.totalPrice}</span>
                     </div>
                     <div className='flex justify-between pt-3'>
                        <span>Discount</span>
                        <span className='text-green-600 '>-${cartStore.cart?.totalPrice - cartStore.cart?.totalDiscountedPrice}</span>
                     </div>
                     <div className='flex justify-between pt-3 '>
                        <span>Delivery Charges</span>
                        <span className='text-green-600 '>Free</span>
                     </div>
                     <div className='flex justify-between pt-3 font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green-600 '>${cartStore.cart?.totalDiscountedPrice}</span>
                     </div>
                  </div>
                  <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", marginTop: 3 }}>
                     Checkout
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart