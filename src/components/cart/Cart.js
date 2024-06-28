import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../state/cart/Action';
import CartItem from './CartItem';
import { Pagination, Skeleton } from 'antd';

const Cart = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { cartStore } = useSelector(store => store);
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);

   const handleCheckOut = () => {
      navigate("/checkout?step=2");
   }
console.log(cartStore);
   const handlePageChange = (page) => {
      setCurrentPage(page);
      console.log(`Đã chuyển đến trang ${page}`);
   };

   useEffect(() => {
      const fetchCart = async () => {
         setIsLoading(true);
         dispatch(getCart(currentPage - 1, 3));
         setIsLoading(false);
      };
      fetchCart();
   }, [dispatch, currentPage]);

   if (isLoading || !cartStore.cart) {
      return <Skeleton active />;
   }

   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   }
   return (
      <div className='mt-16'>
         <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
               {cartStore.cart.cartItems.content.map((item, index) => (
                  <CartItem productItem={item} key={index} reloadCart={() => dispatch(getCart(currentPage - 1, 3))} />
               ))}
               {
                  cartStore.cart.cartItems.content.length === 0 ? <>Không có sản phẩm nào!</> : 
                  (<div className="pagination-container text-center">
                     <Pagination
                        current={currentPage}
                        total={cartStore.cart.cartItems.totalElements}
                        pageSize={cartStore.cart.cartItems.size}
                        onChange={handlePageChange}
                     />
                  </div>)
               }
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
               <div className='border p-5'>
                  <p className='uppercase font-bold opacity-60 pb-4'>Chi tiết giá</p>
                  <hr />
                  <div className='space-y-3 font-semibold'>
                     <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>{formatCurrency(cartStore.cart.cart.totalPrice == null ? 0 : cartStore.cart.cart.totalPrice)}</span>
                     </div>
                     <div className='flex justify-between pt-3'>
                        <span>Discount</span>
                        <span className='text-green-600'>-{formatCurrency(cartStore.cart.cart.totalPrice == null ? 0 : (cartStore.cart.cart.totalPrice - cartStore.cart.cart.totalDiscountedPrice))}</span>
                     </div>
                     <div className='flex justify-between pt-3 '>
                        <span>Địa chỉ giao hàng</span>
                        <span className='text-green-600'>Miễn phí</span>
                     </div>
                     <div className='flex justify-between pt-3 font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green-600'>{formatCurrency(cartStore.cart.cart.totalDiscountedPrice == null ? 0 : cartStore.cart.cart.totalDiscountedPrice)}</span>
                     </div>
                  </div>
                  <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", marginTop: 3 }}>
                     Thanh toán
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
