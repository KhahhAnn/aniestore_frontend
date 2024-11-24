
import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import logo from "../../logoAnie.png"


const Fotter = () => {
   return (
      <div>
         <Grid className='bg-white text-black text-start mt-20 ml-6 ' container>
            <Grid item xs={14} sm={10} md={3} className='text-start'>
               <div className='flex flex-col justify-start max-w-[300px] gap-6'>
                  <img className='w-[100px] h-[100px] object-cover -ml-3 rounded-full' src={logo} alt='' />
                  <h1 className='text-[26px] font-bold'> Liên hệ </h1>
                  <p className='text-[#7E7E7E] font-medium text-base'> contact@khahhann.admin</p>
                  <p className='text-[#7E7E7E] font-medium text-base'>90 Văn Trí, quận Bắc Từ Liêm, thành phố Hà Nội </p>
                  <p className='text-[#7E7E7E] font-medium text-base'> Việt Nam </p>
               </div>
            </Grid>
            <Grid item xs={12} sm={1} md={3} >
               <div className='flex flex-col text-start max-w-[300px] gap-6 mt-4'>
                  <p className='text-[28px] font-bold mr-'>Thông tin</p>
                  <a href='/about' className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> About us</a>
                  <a href='/contact-us' className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'>Contact Us </a>
                  <a href='/faqs' className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> FAQS </a>
               </div>
            </Grid>
            <Grid item xs={1} sm={1} md={3} >
               <div className='flex flex-col justify-start max-w-[300px] gap-6 mt-4'>
                     <p className='text-[28px] font-bold'>Liên kết</p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Tài khoản</p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Thời trang nam </p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Thời trang nữ </p>
                     <p className='text-[#7E7E7E] font-medium text-base hover:text-[#2ebb77]'> Thời trang bé </p>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               <div className='flex flex-col justify-start gap-6 mt-4'>
                     <p className='text-[28px] font-bold'>Bất kỳ thắc mắc </p>
                     <p className='text-[24px] font-bold'>contact@thuhuyen.admin</p>
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
