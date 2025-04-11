import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../../state/cart/Action';
import CartItem from './CartItem';
import { Pagination, Skeleton } from 'antd';
import axios from 'axios'; // Thêm axios

const Cart = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { orderStore } = useSelector(store => store);
   const { cartStore } = useSelector(store => store);
   const [isLoading, setIsLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const [isDiscountInputVisible, setIsDiscountInputVisible] = useState(false);
   const [discountCode, setDiscountCode] = useState("");
   const [discountError, setDiscountError] = useState(""); 
   const [discountValue, setDiscountValue] = useState();

   const handleCheckOut = () => {
      navigate("/checkout?step=2");
   };

   const handlePageChange = (page) => {
      setCurrentPage(page);
      console.log(`Đã chuyển đến trang ${page}`);
   };

   const applyDiscount = async () => {
      try {
         const token = localStorage.getItem("jwt");
         setDiscountError("");
         const response = await axios.get(`http://localhost:8080/api/discount/${discountCode}`, {
            headers: {
               "Authorization": `Bearer ${token}`,
            }
         });
         if (response && response.data && response.data.expiry) {
            const currentDate = new Date();
            const expiryDate = new Date(response.data.expiry);

            if (expiryDate > currentDate) {
               setDiscountValue((cartStore.cart.cart.totalPrice * response.data.percentDiscount) / 100);
               localStorage.setItem("discountValue", (cartStore.cart.cart.totalPrice * response.data.percentDiscount) / 100)
               setDiscountError(""); 
            } else {
               setDiscountError("Mã giảm giá đã hết hạn.");
            }
         } else {
            setDiscountError("Mã giảm giá không hợp lệ hoặc đã hết hạn.");
         }
      } catch (error) {
         console.error("Lỗi khi kiểm tra mã giảm giá:", error);
         setDiscountError("Đã xảy ra lỗi. Vui lòng thử lại.");
      }
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
      return <Skeleton active={'true'} />;
   }

   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   };

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
                  <p className='uppercase font-bold opacity-60 pb-4'>Hóa đơn</p>
                  <hr />
                  <div className='space-y-3 font-semibold'>
                     <div className='flex justify-between pt-3 text-black'>
                        <span>Giá tiền</span>
                        <span>{formatCurrency(cartStore.cart.cart.totalPrice == null ? 0 : cartStore.cart.cart.totalPrice)}</span>
                     </div>
                     <div className='flex justify-between pt-3'>
                        <span>Giảm giá</span>
                        <span className='text-green-600'>
                           {discountCode && discountValue ? 
                              `-${formatCurrency(discountValue)}` 
                              : '0đ'}
                        </span>
                     </div>
                     <div className='flex justify-between pt-3 '>
                        <span>Phí vận chuyển</span>
                        <span className='text-green-600'>Miễn phí</span>
                     </div>
                     <div className='flex justify-between pt-3 font-bold'>
                        <span>Tổng tiền</span>
                        <span className='text-green-600'>
                           {formatCurrency(cartStore.cart.cart.totalDiscountedPrice == null ? 0 : cartStore.cart.cart.totalDiscountedPrice - discountValue)}
                        </span>
                     </div>
                  </div>

                  <div className='mt-4'>
                     {!isDiscountInputVisible && (
                        <Button onClick={() => setIsDiscountInputVisible(true)} variant='outlined' className='w-full'>
                           Áp mã giảm giá
                        </Button>
                     )}
                     {isDiscountInputVisible && (
                        <div className='mt-3'>
                           <TextField
                              fullWidth
                              variant="outlined"
                              label="Nhập mã giảm giá"
                              value={discountCode}
                              onChange={(e) => setDiscountCode(e.target.value)}
                              error={!!discountError}
                              helperText={discountError}
                           />
                           <div className='mt-2'>
                              <Button onClick={applyDiscount} variant='contained' className='w-full mt-5' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#2ebb77" }}>
                                 Áp dụng
                              </Button>
                           </div>
                        </div>
                     )}
                  </div>
                  <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#2ebb77", marginTop: 3 }}>
                     Thanh toán
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
