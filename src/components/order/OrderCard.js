import { Grid, Button } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const OrderCard = () => {
   const navigate = useNavigate();
   const [orders, setOrders] = useState([]);
   const token = localStorage.getItem('jwt');

   const fetchData = async () => {
      try {
         const response = await axios.get(`http://localhost:8080/api/orders/user`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         setOrders(response.data);
         console.log(response.data);
      } catch (error) {
         console.error('Error fetching reviews:', error);
      }
   };

   const handleRecive = async (id) => {
      try {
         const response = await axios.get(`http://localhost:8080/api/orders/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         fetchData();
         message.success("Cập nhận trạng thái thành công");
      } catch (error) {
         console.error('Error fetching reviews:', error);
         message.success("Cập nhận trạng thái thất bại");
      }
   };

   useEffect(() => {
      fetchData();
   }, []);
   console.log(orders);
   return (
      <div>
         {orders.map((order) =>
            order.orderItems.map((item, index) => (
               <div
                  key={index}
                  className='px-5 py-3 shadow-md shadow-black hover:shadow-2xl border mb-5'
               >
                  <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                     <Grid item xs={6}>
                        <div className='flex cursor-pointer'>
                           <img
                              className='w-[5rem] h-[5rem] object-cover object-top'
                              src={item.product.imageUrl}
                              alt={item.product.title}
                           />
                           <div className='ml-5 space-y-2'>
                              <p className='mb-2'>{item.product.title}</p>
                              <p className='opacity-50 text-xs font-semibold'>Size: {item.size}</p>
                              <p className='opacity-50 text-xs font-semibold'>Màu sắc: {item.product.color}</p>
                              <p className='opacity-50 text-xs font-semibold'>Số lượng: <span className='text-[#2ebb77] font-bold'>{item.product.quantity}</span></p>
                           </div>
                        </div>
                     </Grid>
                     <Grid item xs={2}>
                        <p>${item.price}</p>
                     </Grid>
                     <Grid item xs={4}>
                        <div>
                           <p>
                              <AdjustIcon
                                 sx={{ width: '15px', height: '15px' }}
                                 className='text-green-600 mr-2 text-sm'
                              />
                              <span>Đơn đặt vào ngày {order.deliveryDate}</span>
                           </p>
                           <p className='text-xs'>Your Item Has Been Delivered</p>
                           <p className='text-lg font-bold text-[#2ebb77] '>{order.orderStatus}</p>
                        </div>
                        <Button
                           variant="contained"
                           color="primary"
                           disabled={order.orderStatus !== "Đã giao"}
                           onClick={() => {
                              if (order.orderStatus === "Đã giao") {
                                 handleRecive(order.id)
                              }
                           }}
                        >
                           Check Status
                        </Button>
                     </Grid>
                  </Grid>
               </div>
            ))
         )}
      </div>
   );
};

export default OrderCard;
