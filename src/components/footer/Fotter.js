import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Fotter = () => {
   return (
      <div>
         <Grid className='bg-white text-black text-start mt-20 ml-6 ' container>
            <Grid item xs={14} sm={10} md={3} className='text-start'>
               <div className='flex flex-col justify-start max-w-[300px] gap-6'>
                  <img className='w-[200px] h-[50px] object-cover -ml-3' src='https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/12/06090514/logo-shop-qu%E1%BA%A7n-%C3%A1o-7.jpg' alt='' />
                  <h1 className='text-[26px] font-bold'> Design your next favorite custom shirt</h1>
                  <p className='text-[#7E7E7E] font-medium text-base'> contact@khahhann.admin</p>
                  <p className='text-[#7E7E7E] font-medium text-base'>90 VanTri BacTuLiem, HaNoi </p>
                  <p className='text-[#7E7E7E] font-medium text-base'> VietNam </p>
               </div>
            </Grid>
            <Grid item xs={12} sm={1} md={3} >
               <div className='flex flex-col text-start max-w-[300px] gap-6 mt-4'>
                  <p className='text-[28px] font-bold mr-'>Information</p>
                  <a href='/about' className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> About us</a>
                  <a href='/contact-us' className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'>Contact Us </a>
                  <a href='/faqs' className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> FAQS </a>
                  <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Privacy policy </p>
                  <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Refund and Returns Policy </p>
               </div>
            </Grid>
            <Grid item xs={1} sm={1} md={3} >
               <div className='flex flex-col justify-start max-w-[300px] gap-6 mt-4'>
                     <p className='text-[28px] font-bold'>Useful links</p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> My Account</p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Men's Apparel </p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Women's Apparel </p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Kid's Apparel</p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Templates </p>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <div className='flex flex-col justify-start gap-6 mt-4'>
                     <p className='text-[28px] font-bold'>Any questions</p>
                     <p className='text-[24px] font-bold'>contact@thuhuyen.admin</p>
                     <p className='text-[#7E7E7E] font-medium text-base'> Find answers to all of your questions </p>
               </div>
            </Grid>
            <Grid className='pt-20' item xs={12}>
               <img className='mx-auto mb-6' src='https://teespace.store/wp-content/uploads/2022/08/footer-payment-method.png' alt='' />
               <h3 className='text-[#7E7E7E] font-medium text-base text-center' >&copy; 2024 Made by ThuHuyen, KhanhAn</h3>
            </Grid>
         </Grid>
      </div>
   )
}

export default Fotter