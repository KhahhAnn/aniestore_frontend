import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../state/cart/Action';
import CartItem from './CartItem';
import {Pagination, Skeleton } from 'antd';

const Cart = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { cartStore } = useSelector(store => store);
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);

   const handleCheckOut = () => {
      navigate("/checkout?step=2");
   }

   const handlePageChange = (page) => {
      setCurrentPage(page);
      console.log(`Đã chuyển đến trang ${page}`);
   };

   useEffect(() => {
      dispatch(getCart(currentPage - 1, 3));
      setIsLoading(false);
   }, [dispatch, currentPage]);

   if (isLoading || cartStore.cart === null) {
      return <Skeleton active />;
   }

   console.log(cartStore);
   return (
      <div className='mt-16'>
         <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
               {cartStore.cart.content.map((item, index) => (
                  <CartItem productItem={item} key={index} />
               ))}
               <div className="pagination-container text-center">
                  <Pagination
                     current={currentPage}
                     total={cartStore.cart.totalElements} 
                     pageSize={cartStore.cart.size} 
                     onChange={handlePageChange}
                  />
               </div>
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
               <div className='border p-5'>
                  <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                  <hr />
                  <div className='space-y-3 font-semibold'>
                     <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>${cartStore.cart.content.totalPrice == null ? 0 : cartStore.totalPrice}</span>
                     </div>
                     <div className='flex justify-between pt-3'>
                        <span>Discount</span>
                        <span className='text-green-600 '>-${cartStore.totalPrice == null ? 0 : (cartStore.totalPrice - cartStore.totalDiscountedPrice)}</span>
                     </div>
                     <div className='flex justify-between pt-3 '>
                        <span>Delivery Charges</span>
                        <span className='text-green-600 '>Free</span>
                     </div>
                     <div className='flex justify-between pt-3 font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green-600 '>${cartStore.totalDiscountedPrice == null ? 0 : cartStore.totalDiscountedPrice}</span>
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

export default Cart;
