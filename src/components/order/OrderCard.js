import { Grid, Button, Pagination } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import React, { useEffect, useState, useCallback } from 'react';
import { message } from 'antd';
import axios from 'axios';

const OrderCard = () => {
   const [orders, setOrders] = useState([]);
   const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
   const itemsPerPage = 5; // Số đơn hàng hiển thị mỗi trang
   const token = localStorage.getItem('jwt');

   // Hàm lấy dữ liệu đơn hàng
   const fetchData = useCallback(async () => {
      try {
         const response = await axios.get('http://localhost:8080/api/orders/user', {
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

   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   };

   useEffect(() => {
      fetchData();
   }, [fetchData]);

   // Xác định các đơn hàng sẽ hiển thị trên trang hiện tại
   const currentOrders = orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


   console.log(currentOrders);
   

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
               count={Math.ceil(orders.length / itemsPerPage)} // Số trang
               page={currentPage}
               onChange={(event, value) => setCurrentPage(value)}
               color="primary"
            />
         </div>


      </div>
   );
};

export default OrderCard;
