import React, { useState } from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';

const orderStatus = [
   { label: "Đã xác nhận đơn", value: "Đã xác nhận đơn" },
   { label: "Chưa xác nhận đơn", value: "Chưa xác nhận đơn" },
   { label: "Đơn hàng đang vận chuyển", value: "Đơn hàng đang vận chuyển" },
   { label: "Đã giao", value: "Đã giao" },
   { label: "Nhận hàng thành công", value: "Nhận hàng thành công" },
];

const Order = () => {
   const [selectedStatus, setSelectedStatus] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

   const handleCheckboxChange = (value) => {
      setCurrentPage(1);
      setSelectedStatus(prev => 
         prev.includes(value)
            ? prev.filter(status => status !== value)
            : [...prev, value]
      );
   };

   return (
      <div className='px-5 mt-28'>
         <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={2.5}>
               <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                  <h1 className='font-bold text-lg'>Lọc</h1>
                  <div className='space-y-4 mt-10'>
                     <h1 className='font-semibold'>Trạng thái đơn hàng</h1>
                     {orderStatus.map((option) => (
                        <div className='flex items-center mb-5' key={option.value}>
                           <input
                              type='checkbox'
                              value={option.value}
                              checked={selectedStatus.includes(option.value)}
                              onChange={() => handleCheckboxChange(option.value)}
                              className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                           />
                           <label className='ml-3 text-sm text-gray-600'>
                              {option.label}
                           </label>
                        </div>
                     ))}
                  </div>
               </div>
            </Grid>
            <Grid item xs={9}>
               <div className='space-y-5'>
                  <OrderCard selectedStatus={selectedStatus} setCurrentPage={setCurrentPage} currentPage={currentPage} />
               </div>
            </Grid>
         </Grid>
      </div>
   );
};

export default Order;
