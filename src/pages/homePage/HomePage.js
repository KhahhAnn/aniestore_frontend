import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DoneIcon from '@mui/icons-material/Done'
import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { mens_kurta } from '../../data/men_kurta'
import "./HomePage.css"
import TimerCountdown from '../../components/timerCountdown/TimerCountdown'
import PublicIcon from '@mui/icons-material/Public';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CallIcon from '@mui/icons-material/Call';
import PaymentIcon from '@mui/icons-material/Payment';
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs";
import Badge from './Badge'


const HomePage = () => {
   return (
      <div className='mt-10'>
         <div>
            <div className='flex justify-center items-center gap-10 mx-20'>
               <img style={{ height: "817.55px", width: "720px", borderRadius: "10px" }} src='https://i.pinimg.com/564x/0f/7c/2e/0f7c2e65b25d2390323bb74b2fbb76de.jpg' alt='' />
               <div>
                  <div>
                     <div className='flex flex-col flex-nowrap gap-10'>
                        <div className='flex flex-row gap-4'>
                           <h3 style={{ fontSize: "18px", backgroundColor: "rgb(180, 121, 217, 40%)", borderRadius: "20px", padding: "5px", color: "#B479D9", fontWeight: "bold", paddingLeft: "20px", paddingRight: "20px" }}> Rated 4.9 of 5.0</h3>
                           <Rating style={{ marginTop: "12px", width: "30px" }} value={4.5} name="size-large" size="large" readOnly precision={0.5} />
                        </div>
                        <div>
                           <h1 className='font-bold text-5xl justify-center content-center mb-4' style={{padding: "10px", marginTop: "10px"}}>
                              Cùng AnieStore trải qua một mùa hè tràn đầy màu sắc
                           </h1>
                           <p className='text-slate-400 font-medium'>Hãy ghé qua cửa hàng của chúng tôi! AnieStore sẽ có đầy đủ các mẫu thời trang mới nhất hiện tại.</p>
                        </div>
                        <div>
                           <div>
                              <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} />Các mẫu thời trang đang là top trend</h3>
                           </div>
                           <div>
                              <h3 className='font-medium text-base'> <DoneIcon style={{ color: "11B196" }} />Các mẫu thời trang đang được bán nhiều nhất</h3>
                           </div>
                        </div>
                        <div>
                           <button className='text-white font-bold text-base' style={{ backgroundColor: "#2EBB77", padding: "10px", borderRadius: "10px" }}>MUA NGAY<ArrowForwardIcon /> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='align-middle text-center mt-20'>
            <h1 className='font-bold text-4xl'>T-shirt cho mọi nhà</h1>
            <p className='font-medium text-xl text-slate-400'>Bấm vào để xem thêm!!!</p>
         </div>
         <div className="flex flex-row gap-20 justify-center mt-10">
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i.pinimg.com/736x/52/ad/c0/52adc03093fe250c30ebb8e30911c41d.jpg' alt='' />
               <p className='text-center font-bold text-xl mt-4'>T-shirt</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i.pinimg.com/564x/97/61/47/976147543c2d8cfd2452f42470032fe7.jpg' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Sơ mi</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i.pinimg.com/736x/79/a7/1f/79a71f1564fec3ed0017dc9e36405744.jpg' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Sweater</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i.pinimg.com/564x/c4/57/68/c45768450e4018bfd43093bedf93d5d8.jpg' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Hoodies</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i.pinimg.com/564x/f2/63/24/f26324567e73eb72db5f524b62d02efd.jpg' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Tanktop</p>
            </div>
         </div>
         <div className='flex gap-10 my-20 mx-10'>
            <div className="">
               <div style={{ position: "relative" }}>
                  <img className='rounded-lg brand-img' src='https://i.pinimg.com/736x/a4/df/1c/a4df1c109758f35ac28781959c4395b6.jpg' alt='' />
               </div>
               <div style={{ position: "absolute" }}>
                  <div className='haru-banner_content font-bold text-base'>Dành cho nam</div>
               </div>
            </div>
            <div>
               <div style={{ position: "relative" }}>
                  <img className='rounded-lg brand-img' src='https://i.pinimg.com/564x/42/f1/1f/42f11f6ee557202aa1ecd32824968483.jpg' alt='' />
               </div>
               <div style={{ position: "absolute" }}>
                  <div className='haru-banner_content font-bold text-base'>Dành cho bé</div>
               </div>
            </div>
            <div>
               <div style={{ position: "relative" }}>
                  <img className='rounded-lg brand-img' src='https://i.pinimg.com/564x/13/da/86/13da86f6990c0102fcef4578a6e8905c.jpg' alt='' />
               </div>
               <div style={{ position: "absolute" }}>
                  <div className='haru-banner_content font-bold text-base'>Dành cho nữ</div>
               </div>
            </div>
         </div>
         <div className='align-middle text-center mt-20'>
            <h1 className='font-medium text-7xl mb-10 text-main'>Các mẫu mới nhất</h1>
            <h1 className='font-bold text-4xl' style = {{paddingBottom: "40px"}}>Sản phẩm nổi bật</h1>
         </div>
         <div className='grid grid-cols-4 gap-20'>
            {
               [1, 2, 3, 4, 5, 6, 7, 8].map(
                  (i) => (
                     // <div className='mt-10 productCard w-[90%] h-[32rem] cursor-pointer rounded-md p-3 border-4 border-gray-200 bg-slate-100 ml-4'>
                     //    <div className='h-[25rem]'>
                     //       <img className='w-full h-full object-cover object-left-top rounded-md' src={mens_kurta[i].imageUrl} alt='' />
                     //    </div>
                     //    <div className='p-3'>
                     //       <div>
                     //          <p className='font-bold opacity-60 text-center'>{mens_kurta[i].brand}</p>
                     //       </div>
                     //       <div className='flex justify-center space-x-2 mt-4'>
                     //          <p className='font-semibold'>${mens_kurta[i].discountedPrice}</p>
                     //          <p className='line-through opacity-50'>${mens_kurta[i].price}</p>
                     //          <p className='text-green-600 font-semibold'>${mens_kurta[i].discountPersent}% sale off</p>
                     //       </div>
                     //    </div>
                     // </div>
                     <div className="w-full relative group p-3 rounded-xl bg-slate-200 hover:scale-110 duration-500 ">
                        <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
                           <div>
                              <img className="w-full h-full rounded-lg" src={mens_kurta[i].imageUrl} alt='' />
                           </div>
                           <div className="absolute top-6 left-2">
                              {<Badge text="New" />}
                           </div>
                           <div className="w-full h-28 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
                              <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                                 <li
                                    className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                                 >
                                    Thêm vào giỏ hàng
                                    <span>
                                       <FaShoppingCart />
                                    </span>
                                 </li>
                                 <li
                                    className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                                 >
                                    Chi tiết sản phẩm
                                    <span className="text-lg">
                                       <MdOutlineLabelImportant />
                                    </span>
                                 </li>
                                 <li
                                    className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                                 >
                                    Thêm vào danh sách yêu thích
                                    <span>
                                       <BsSuitHeartFill />
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="max-w-80 flex flex-col gap-1 px-4">
                           <div className="flex items-center justify-between font-titleFont">
                              <h2 className="text-lg text-black font-bold">
                                 {mens_kurta[i].brand}
                              </h2>
                              <p className="text-[#767676] text-[14px]">${mens_kurta[i].discountedPrice}</p>
                           </div>
                           <div>
                              <p className="text-[#767676] text-[14px]">{mens_kurta[i].discountPersent}</p>
                           </div>
                        </div>
                     </div>
                  )
               )
            }
         </div>

         <div className='flex justify-center mt-40'>
            <div>
               <h3 className='uppercase text-[#B479D9] font-bold text-sm'>Chương trình khuyến mại</h3>
               <h1 className='font-bold text-[40px]'>Giảm giá tới 30%</h1>
               <p className='text-[#7E7E7E] font-medium text-lg max-w-96 leading-8 mt-8'>Đồ bộ ngắn tay phù hợp cho những chuyến đi biển của bạn vào mùa hè này</p>
               <TimerCountdown targetDate="2024-06-01T00:00:00" />
               <button className='text-white font-bold text-base mt-10' style={{ backgroundColor: "#2EBB77", padding: "10px", borderRadius: "10px" }}>Mua ngay với 199.000đ<ArrowForwardIcon /> </button>
            </div>
            <div>
               <div className='flex gap-10 relative'>
                  <img className='rounded-2xl w-[402px] h-[575px] translate' src='https://i.pinimg.com/736x/be/e7/65/bee765519bbf9d9add7bd2940367beea.jpg' alt='' />
                  <div className='absolute ml-[42%] mt-[30%] px-5 py-5 rounded-full bg-[#B479D9] text-center z-10'>
                     <h1 className='text-white font-bold text-xl'>Giảm tới</h1>
                     <h1 className='text-white font-bold text-[40px]'>30%</h1>
                  </div>
                  <img className='rounded-2xl w-[402px] h-[575px] mt-14 translate' src='https://i.pinimg.com/736x/07/27/3f/07273fdf1ff6caa5c8821b6cc5d4fe77.jpg' alt='' />
               </div>
            </div>
         </div>

         <div className='mt-40'>
            <h2 className='font-bold text-center text-5xl'>Gửi phản hồi cho chúng tôi những phản hồi tốt nhất</h2>
            <div className='mx-10'>
               <div className='grid gap-4 mt-10'>
                  <div className='grid grid-cols-3 gap-4'>
                     <div className='row-span-2 feed-back-container-img'>
                        <img className='rounded-xl w-full h-[720px] object-cover feed-back-img' src='https://i.pinimg.com/564x/27/65/7d/27657dde2d20381b23e6a2b29b0c6f7f.jpg' alt='' />
                     </div>
                     <div className='col-span-2 feed-back-container-img'>
                        <img className='rounded-xl h-[350px] w-full object-cover feed-back-img' src='https://i.pinimg.com/564x/89/be/4d/89be4d8c3201468024d61ad590de3e0d.jpg' alt='' />
                     </div>
                     <div className='col-span-2 feed-back-container-img'>
                        <img className='rounded-xl h-[350px] w-full object-cover feed-back-img' src='https://i.pinimg.com/564x/14/5e/83/145e8370c48535184594cfd4521ec5b3.jpg' alt='' />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='flex justify-items-center justify-between bg-[#64CB9A] mt-20'>
            <div className='my-auto max-w-xl ml-20'>
               <h2 className='text-white text-5xl font-bold mb-6'>Bạn có thắc mắc gì về chúng tôi không? Hãy liên hệ ở dưới nhé!!!</h2>
               <button className='px-5 py-3 bg-white rounded-2xl font-bold mr-10 text-black hover:bg-[#2ebb77] hover:text-white'>Shop Now<ArrowForwardIcon /></button>
               <button className='px-5 py-3 bg-white rounded-2xl font-bold text-black hover:bg-[#2ebb77] hover:text-white'>Contact Us<ArrowForwardIcon /></button>
            </div>
            <div className='mr-20'>
               <img src="https://teespace.store/wp-content/uploads/2023/08/banner-111.png" alt='' />
            </div>
         </div>

         <div className='flex justify-center gap-16 mt-20'>
            <div className='text-center'>
               <PublicIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Giao hàng</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Miễn phí với đơn hàng trên 200.000đ</p>
            </div>
            <div className='text-center'>
               <SettingsBackupRestoreIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Hoàn hàng</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Hỗ trợ hoàn hàng trong 7 ngày.</p>
            </div>
            <div className='text-center'>
               <CallIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Hỗ trợ online</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Hãy nhắn tin với chúng tôi ngay tại website này.</p>
            </div>
            <div className='text-center'>
               <PaymentIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Thanh toán</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Thanh toán bằng thẻ tín dụng hoặc khi nhận hàng</p>
            </div>
         </div>
      </div>
   )
}

export default HomePage