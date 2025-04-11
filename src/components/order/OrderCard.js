import AdjustIcon from '@mui/icons-material/Adjust';
import { Button, message, Pagination } from "antd";
import { Grid } from '@mui/material';
import axios from "axios";
import React, { useCallback, useEffect, useState } from 'react';

const OrderCard = ({ selectedStatus, setCurrentPage, currentPage }) => {
   const [orders, setOrders] = useState([]);
   const itemsPerPage = 5;
   const token = localStorage.getItem('jwt');

   const fetchData = useCallback(async () => {
      try {
         const response = await axios.get(`http://localhost:8080/api/orders/user`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         setOrders(response.data);
      } catch (error) {
         console.error('Error fetching orders:', error);
         message.error('Không thể tải đơn hàng.');
      }
   }, [token]);

   const handleReceive = async (id) => {
      try {
         await axios.get(`http://localhost:8080/api/orders/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         fetchData();
         message.success('Cập nhật trạng thái thành công');
      } catch (error) {
         console.error('Error updating order:', error);
         message.error('Cập nhật trạng thái thất bại');
      }
   };

   useEffect(() => {
      fetchData();
   }, [fetchData]);

   const filteredOrders = selectedStatus.length > 0
      ? orders.filter(order => selectedStatus.includes(order.orderStatus))
      : orders;

   const currentOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
   

   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   };

   
   return (
      <div>
         {currentOrders.map((order) =>
            order.orderItems.map((item, index) => (
               <div key={index} className="px-5 py-3 shadow-md shadow-black hover:shadow-2xl border mb-5">
                  <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                     <Grid item xs={6}>
                        <div className="flex cursor-pointer">
                           <img
                              className="w-[5rem] h-[5rem] object-cover object-top"
                              src={item.product.imageUrl}
                              alt={item.product.title}
                           />
                           <div className="ml-5 space-y-2">
                              <p className="mb-2">{item.product.title}</p>
                              <p className="opacity-50 text-xs font-semibold">Size: {item.size}</p>
                              <p className="opacity-50 text-xs font-semibold">Màu sắc: {item.product.color}</p>
                           </div>
                        </div>
                     </Grid>
                     <Grid item xs={2}>
                        <p>{formatCurrency(item.price)}</p>
                     </Grid>
                     <Grid item xs={4}>
                        <div>
                           <p>
                              <AdjustIcon sx={{ width: '15px', height: '15px' }} className="text-green-600 mr-2 text-sm" />
                              <span>Đơn đặt vào ngày {order.createdAt}</span>
                           </p>
                           <p className="text-lg font-bold text-[#2ebb77] ">{order.orderStatus}</p>
                        </div>
                        <Button
                           variant="contained"
                           color="primary"
                           disabled={order.orderStatus !== "Đã giao"}
                           onClick={() => order.orderStatus === "Đã giao" && handleReceive(order.id)}
                        >
                           Đã nhận đơn
                        </Button>
                     </Grid>
                  </Grid>
               </div>
            ))
         )}
         <div className='mx-auto'>
            <Pagination
               current={currentPage}
               total={filteredOrders?.length}
               pageSize={itemsPerPage}
               onChange={(event) => setCurrentPage(event)}
               color="primary"
            />
         </div>
      </div>
   );
};

export default OrderCard;
