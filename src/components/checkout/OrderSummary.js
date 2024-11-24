import React, { useEffect, useState } from 'react'
import AdressCard from '../adressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../state/order/Action'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Skeleton, message } from 'antd'

const OrderSummary = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const navigate = useNavigate();
   const searchParam = new URLSearchParams(location.search);
   const orderId = searchParam.get("order_id");
   const { orderStore } = useSelector(store => store);
   const [isLoading, setIsLoading] = useState(true);

   const discount = localStorage.getItem("discountValue");

   useEffect(() => {
      dispatch(getOrderById(orderId));
      setIsLoading(false);
   }, [orderId]);
   console.log(orderStore.order);
   const toPaymenntGateway = async () => {
      try {
         const total = orderStore.order.totalDiscountedPrice - discount;
         const response = await axios.get(`http://localhost:8080/api/payment/create_payment/${total}`);
         window.location.href = response.data.url;
         setIsLoading(false);
      } catch (error) {
         console.error('Error fetching color:', error);
      }
   };
   const toPaymentCod = async () => {
      try {
         const response = await axios.get(`http://localhost:8080/api/payment/payment_cod/${orderId}`);
         message.success("Thành công!")
         navigate("/home")
         setIsLoading(false);
         
      } catch (error) {
         message.error("Thất bại!")
         console.error('Error fetching color:', error);
      }
   };
   if (isLoading) {
      return <Skeleton active />;
   }
   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   }  


   return (
      <div>
         <div className='p-5 shadow-lg rounded-s-md border'><div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 space-y-6">
            <div className="flex flex-col ">
               <div className="space-y-1">
                  <p className="font-semibold text-gray-800 text-lg"><span className="italic">Họ tên người nhận:</span>  {orderStore.order.shippingAddress.firstName} {orderStore.order.shippingAddress.lastName}</p>
               </div>
               <div className="space-y-1">
                  <p className="font-semibold text-gray-800 text-"><span className="italic">Địa chỉ người nhận:</span> {orderStore.order.shippingAddress.streetAddress}</p>
               </div>
               <div className="space-y-1">
                  <p className="font-semibold text-gray-800 text-lg"><span className="italic">Số điện thoại: </span> {orderStore.order.shippingAddress.mobile}</p>
               </div>
            </div>
         </div>
         </div>
         <div className='mt-4'>
            <div className='lg:grid grid-cols-3 relative'>
               <div className='col-span-2'>
                  {orderStore.order?.orderItems?.map((item, index) => <CartItem productItem={item} key={index} />)}
               </div>
               <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                  <div className='border p-5'>
                     <p className='uppercase font-bold opacity-60 pb-4'>Hóa đơn</p>
                     <hr />
                     <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 text-black'>
                           <span>Giá tiền</span>
                           <span>{formatCurrency(orderStore.order?.totalDiscountedPrice)}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                           <span>Giảm giá</span>
                           <span className='text-green-600 '>{formatCurrency(discount ? -discount : 0)}</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                           <span>Phí vận chuyển</span>
                           <span className='text-green-600 '>Miễn phí</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold'>
                           <span>Tổng tiền</span>
                           <span className='text-green-600 '>{formatCurrency(orderStore.order?.totalDiscountedPrice - discount)} </span>
                        </div>
                     </div>
                     <Button onClick={() => toPaymenntGateway()} variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#2ebb77", marginTop: 3, borderRadius: "12px" }}>
                        Thanh toán VNPAY
                     </Button>
                     <Button onClick={() => toPaymentCod()} variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", marginTop: 3, borderRadius: "12px" }}>
                        Thanh toán bằng tiền mặt
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default OrderSummary