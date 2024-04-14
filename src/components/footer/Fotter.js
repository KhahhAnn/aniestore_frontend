import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Fotter = () => {
   return (
      <div>
         <Grid className='bg-white text-black text-start mt-20 ml-6 ' container>
            <Grid item xs={12} sm={6} md={3} >
               <div className='flex flex-col justify-start max-w-[300px] gap-6'>
                  <img className='w-[200px] h-[50px] object-cover -ml-3' src='https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/12/06090514/logo-shop-qu%E1%BA%A7n-%C3%A1o-7.jpg' alt='' />
                  <div>
                     <h1 className='text-[26px] font-bold'> Design your next favorite custom shirt</h1>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base'> contact@khahhann.admin</p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base'>90 VanTri BacTuLiem, HaNoi </p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base'> VietNam </p>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <div className='flex flex-col justify-start max-w-[300px] gap-6 mt-4'>
                  <div>
                     <h2 className='text-[28px] font-bold'>Information</h2>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> About us</p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'>Contact Us </p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> FAQs </p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Privacy policy </p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Refund and Returns Policy </p>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <div className='flex flex-col justify-start max-w-[300px] gap-6 mt-4'>
                  <div>
                     <h2 className='text-[28px] font-bold'>Useful links</h2>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> My Account</p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Men's Apparel </p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Women's Apparel </p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Kid's Apparel</p>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Templates </p>
                  </div>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <div className='flex flex-col justify-start gap-6 mt-4'>
                  <div>
                     <h2 className='text-[28px] font-bold'>Any questions</h2>
                  </div>
                  <div>
                     <h2 className='text-[24px] font-bold'>contact@thuhuyen.admin</h2>
                  </div>
                  <div>
                     <p className='text-[#7E7E7E] font-medium text-base'> Find answers to all of your questions </p>
                  </div>
               </div>
            </Grid>
            <Grid className='pt-20' item xs={12}>
               <img className='mx-auto mb-6'  src='https://teespace.store/wp-content/uploads/2022/08/footer-payment-method.png' alt='' />
               <h3 className='text-[#7E7E7E] font-medium text-base text-center' >&copy; 2024 Made by ThuHuyen, KhanhAn</h3>
            </Grid>
         </Grid>
      </div>
   )
}

export default Fotter