import React from 'react'
import AdressCard from '../adressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetail = () => {
   return (
      <div className='px-5 lg:px-20 mt-16'>
         <div>
            <h1 className='font-bold text-lg py-10'>Địa chỉ giao hàng </h1>
            <AdressCard />
         </div>
         <div className='py-10'>
            <OrderTraker activeStep={3} />
         </div>
         {
            [1, 1, 1, 1, 1].map((item) =>
            (
               <Grid className='space-x-5' container>

                  <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between", marginBottom: "20px"}}>
                     <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                           <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' alt='' />
                           <div className='space-y-2 ml-5'>
                              <p className='font-semibold'>Quần jean đen nam dáng ôm vừa vặn</p>
                              <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Màu: hồng</span> <span>Size: M</span> </p>
                              <p>Người bán: KhahhAn</p>
                              <p>199.000đ</p>
                           </div>
                        </div>
                     </Grid>
                     <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                           <StarBorderIcon className='px-2' sx={{ fontSize: "2rem" }} />
                           <span>Đánh giá</span>
                        </Box>
                     </Grid>
                  </Grid>
               </Grid>
            ))
         }
      </div>
   )
}

export default OrderDetail