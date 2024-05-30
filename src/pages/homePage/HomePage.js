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
               <img style={{ height: "817.55px", width: "720px", borderRadius: "10px" }} src='https://teespace.harutheme.com/elegant/wp-content/uploads/sites/10/2022/10/banner-81.jpg' alt='' />
               <div>
                  <div>
                     <div className='flex flex-col flex-nowrap gap-10'>
                        <div className='flex flex-row gap-4'>
                           <h3 style={{ fontSize: "18px", backgroundColor: "rgb(180, 121, 217, 40%)", borderRadius: "20px", padding: "5px", color: "#B479D9", fontWeight: "bold", paddingLeft: "20px", paddingRight: "20px" }}> Rated 4.9 of 5.0</h3>
                           <Rating style={{ marginTop: "12px", width: "30px" }} value={4.5} name="size-large" size="large" readOnly precision={0.5} />
                        </div>
                        <div>
                           <h1 className='font-bold text-5xl justify-center content-center mb-4'>
                              Enjoy up your vacations in the best T-shirts
                           </h1>
                           <p className='text-slate-400 font-medium'>What’s more, we do it right! A full administration printing background. Print shirts for yourself or your online business</p>
                        </div>
                        <div>
                           <div>
                              <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} />Top quality prints using the latest technology</h3>
                           </div>
                           <div>
                              <h3 className='font-medium text-base'> <DoneIcon style={{ color: "11B196" }} />Mix and match colors, sizes, and designs</h3>
                           </div>
                        </div>
                        <div>
                           <button className='text-white font-bold text-base' style={{ backgroundColor: "#2EBB77", padding: "10px", borderRadius: "10px" }}>Get Started Today <ArrowForwardIcon /> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='align-middle text-center mt-20'>
            <h1 className='font-bold text-4xl'>T-shirt Printing for Everyone</h1>
            <p className='font-medium text-xl text-slate-400'>What’s more, we do it right!</p>
         </div>
         <div className="flex flex-row gap-20 justify-center mt-10">
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i0.wp.com/teespace.harutheme.com/market/wp-content/uploads/2022/10/catetory-31.jpg?ssl=1' alt='' />
               <p className='text-center font-bold text-xl mt-4'>T-shirt</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i0.wp.com/teespace.harutheme.com/market/wp-content/uploads/2022/10/catetory-32.jpg?ssl=1' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Long-sleeves</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i0.wp.com/teespace.harutheme.com/market/wp-content/uploads/2022/10/catetory-33.jpg?ssl=1' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Sweater</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i0.wp.com/teespace.harutheme.com/market/wp-content/uploads/2022/10/catetory-34.jpg?ssl=1' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Hoodies</p>
            </div>
            <div>
               <img style={{ width: "210px", height: "210px", borderRadius: "50%" }} src='https://i0.wp.com/teespace.harutheme.com/market/wp-content/uploads/2022/10/catetory-35.jpg?ssl=1' alt='' />
               <p className='text-center font-bold text-xl mt-4'>Tanktop</p>
            </div>
         </div>
         <div className='flex gap-10 my-20 mx-10'>
            <div className="">
               <div style={{ position: "relative" }}>
                  <img className='rounded-lg brand-img' src='https://teespace.store/wp-content/uploads/2023/08/banner-82.jpg' alt='' />
               </div>
               <div style={{ position: "absolute" }}>
                  <div className='haru-banner_content font-bold text-base'>Men's Collection</div>
               </div>
            </div>
            <div>
               <div style={{ position: "relative" }}>
                  <img className='rounded-lg brand-img' src='https://teespace.store/wp-content/uploads/2023/08/banner-83.jpg' alt='' />
               </div>
               <div style={{ position: "absolute" }}>
                  <div className='haru-banner_content font-bold text-base'>Kid's Collection</div>
               </div>
            </div>
            <div>
               <div style={{ position: "relative" }}>
                  <img className='rounded-lg brand-img' src='https://teespace.store/wp-content/uploads/2023/08/banner-84.jpg' alt='' />
               </div>
               <div style={{ position: "absolute" }}>
                  <div className='haru-banner_content font-bold text-base'>Women's Collection</div>
               </div>
            </div>
         </div>
         <div className='align-middle text-center mt-20'>
            <h1 className='font-medium text-7xl mb-10 text-main'>High quality offset printing</h1>
            <h1 className='font-bold text-4xl'>Featured products</h1>
            <p className='font-medium text-xl text-slate-400'>What’s more, we do it right!</p>
         </div>
         <div className='grid grid-cols-4 gap-20'>
            {
               [1, 2, 3, 4, 5, 6, 7, 8].map(
                  (i) => (
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
                                    Add to Cart
                                    <span>
                                       <FaShoppingCart />
                                    </span>
                                 </li>
                                 <li
                                    className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                                 >
                                    View Details
                                    <span className="text-lg">
                                       <MdOutlineLabelImportant />
                                    </span>
                                 </li>
                                 <li
                                    className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                                 >
                                    Add to Wish List
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
               <h3 className='uppercase text-[#B479D9] font-bold text-sm'>special offer</h3>
               <h1 className='font-bold text-[40px]'>Extra Sale 30% off</h1>
               <p className='text-[#7E7E7E] font-medium text-lg max-w-96 leading-8 mt-8'>Bucket toy with a contrast colored handle. Perfect for playing on the beach.</p>
               <TimerCountdown targetDate="2024-06-01T00:00:00" />
               <button className='text-white font-bold text-base mt-10' style={{ backgroundColor: "#2EBB77", padding: "10px", borderRadius: "10px" }}>Get only $29.00<ArrowForwardIcon /> </button>
            </div>
            <div>
               <div className='flex gap-10 relative'>
                  <img className='rounded-2xl w-[402px] h-[575px] translate' src='https://teespace.store/wp-content/uploads/2023/08/banner-85.jpg' alt='' />
                  <div className='absolute ml-[42%] mt-[30%] px-5 py-5 rounded-full bg-[#B479D9] text-center z-10'>
                     <h1 className='text-white font-bold text-xl'>Save</h1>
                     <h1 className='text-white font-bold text-[40px]'>30%</h1>
                  </div>
                  <img className='rounded-2xl w-[402px] h-[575px] mt-14 translate' src='https://teespace.store/wp-content/uploads/2023/08/banner-86.jpg' alt='' />
               </div>
            </div>
         </div>
         <div className='mt-40'>
            <h3 className='text-[#B479D9] py-3 bg-[#dfc3ee] text-center font-bold text-xl rounded-3xl max-w-lg ml-[480px]'>You’ve got the ideas, we’ve got the tools</h3>
            <h1 className='font-bold text-4xl text-center mt-10'>Creating the perfect custom product</h1>
         </div>
         <div className='flex flex-wrap justify-center gap-10 mt-20'>
            <div className='pb-3 bg-slate-200 rounded-xl custom-product mb-10'>
               <img className='w-[437px] h-[437px] rounded-t-xl' src='https://teespace.store/wp-content/uploads/2023/08/367449243_23857013672470376_7906988583192019118_n-1.jpg' alt='' />
               <div className='flex justify-between mx-8 mt-4'>
                  <p className='font-bold text-xl mt-2'>Custom T-Shirt</p>
                  <div className='p-3 rounded-full bg-[#f5f5f5] icon-hover h-[50px]'>
                     <ArrowForwardIcon />
                  </div>
               </div>
            </div>
            <div className='pb-3 bg-slate-200 rounded-xl custom-product mb-10'>
               <img className='w-[437px] h-[437px] rounded-t-xl' src='https://teespace.store/wp-content/uploads/2023/08/Woman-in-beanie-hat-and-hoodie-mockup-2000x1334-1-1.png' alt='' />
               <div className='flex justify-between mx-8 mt-4'>
                  <p className='font-bold text-xl mt-2'>Custom T-Shirt</p>
                  <div className='p-3 rounded-full bg-[#f5f5f5] icon-hover h-[50px]'>
                     <ArrowForwardIcon />
                  </div>
               </div>
            </div>
            <div className='pb-3 bg-slate-200 rounded-xl custom-product mb-10'>
               <img className='w-[437px] h-[437px] rounded-t-xl' src='https://teespace.store/wp-content/uploads/2023/08/Smiling-black-man-with-tank-top-mockup-2000x1334-1-1.png' alt='' />
               <div className='flex justify-between mx-8 mt-4'>
                  <p className='font-bold text-xl mt-2'>Custom T-Shirt</p>
                  <div className='p-3 rounded-full bg-[#f5f5f5] icon-hover h-[50px]'>
                     <ArrowForwardIcon />
                  </div>
               </div>
            </div>
            <div className='pb-3 bg-slate-200 rounded-xl custom-product'>
               <img className='w-[437px] h-[437px] rounded-t-xl' src='https://teespace.store/wp-content/uploads/2023/08/b1e86be07423274b27b55561ddc6eee9_t-1.webp' alt='' />
               <div className='flex justify-between mx-8 mt-4'>
                  <p className='font-bold text-xl mt-2'>Custom T-Shirt</p>
                  <div className='p-3 rounded-full bg-[#f5f5f5] icon-hover h-[50px]'>
                     <ArrowForwardIcon />
                  </div>
               </div>
            </div>
            <div className='pb-3 bg-slate-200 rounded-xl custom-product'>
               <img className='w-[437px] h-[437px] rounded-t-xl' src='https://teespace.store/wp-content/uploads/2023/08/7776d01e716d80e3ffbdebbf3db6b198_t.webp' alt='' />
               <div className='flex justify-between mx-8 mt-4'>
                  <p className='font-bold text-xl mt-2'>Custom T-Shirt</p>
                  <div className='p-3 rounded-full bg-[#f5f5f5] icon-hover h-[50px]'>
                     <ArrowForwardIcon />
                  </div>
               </div>
            </div>
            <div className='pb-3 bg-slate-200 rounded-xl custom-product'>
               <img className='w-[437px] h-[437px] rounded-t-xl' src='https://teespace.store/wp-content/uploads/2023/08/0c38c3b13be79b5f8e1f2f1dccf62115_t.webp' alt='' />
               <div className='flex justify-between mx-8 mt-4'>
                  <p className='font-bold text-xl mt-2'>Custom T-Shirt</p>
                  <div className='p-3 rounded-full bg-[#f5f5f5] icon-hover h-[50px]'>
                     <ArrowForwardIcon />
                  </div>
               </div>
            </div>
         </div>

         <div className='mt-40'>
            <h2 className='font-bold text-center text-5xl'>Give us your best shot!</h2>
            <div className='mx-10'>
               <div className='grid gap-4 mt-10'>
                  <div className='grid grid-cols-4 gap-4'>
                     <div className='col-span-2 feed-back-container-img'>
                        <img className='rounded-xl h-[400px] w-full object-cover feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/12e754eb9649d2bf2159e290a42117b1_l.webp' alt='' />
                     </div>
                     <div className='feed-back-container-img'>
                        <img className='rounded-xl h-[400px] w-full feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/670b410038b14e9c0ca5d9178c6fe82c_l.webp' alt='' />
                     </div>
                     <div className='feed-back-container-img'>
                        <img className='rounded-xl h-[400px] w-full feed-back-img' src='	https://teespace.store/wp-content/uploads/2023/08/3e1a1f53feb137d0209caef95507d8cf_l.webp' alt='' />
                     </div>
                  </div>
                  <div className='grid grid-cols-3 gap-4'>
                     <div className='row-span-2 feed-back-container-img'>
                        <img className='rounded-xl w-full h-[720px] object-cover feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/Ha8cc2747a85e45d4a9cabddd682694e7T.jpg' alt='' />
                     </div>
                     <div className='col-span-2 feed-back-container-img'>
                        <img className='rounded-xl h-[350px] w-full object-cover feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/tshirt-designing-tips-scaled-1.jpg' alt='' />
                     </div>
                     <div className='col-span-2 feed-back-container-img'>
                        <img className='rounded-xl h-[350px] w-full object-cover feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/t-shirt-design-colors-1024x839-1.jpg' alt='' />
                     </div>
                  </div>
                  <div className='grid grid-cols-4 gap-4'>
                     <div className='feed-back-container-img'>
                        <img className='rounded-xl h-[400px] w-full object-cover feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/2a3ade8ca7e8df769e48054662a1e65d_l.webp' alt='' />
                     </div>
                     <div className='col-span-2 feed-back-container-img'>
                        <img className='rounded-xl h-[400px] w-full object-cover feed-back-img' src='https://teespace.store/wp-content/uploads/2023/08/make-tshirt-design-1024x683-1.jpeg' alt='' />
                     </div>
                     <div className='feed-back-container-img'>
                        <img className='rounded-xl h-[400px] w-full feed-back-img' src='	https://teespace.store/wp-content/uploads/2023/08/234e59d56b52b8793953c92fd14ecf12_l.webp' alt='' />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='flex justify-items-center justify-between bg-[#64CB9A] mt-20'>
            <div className='my-auto max-w-xl ml-20'>
               <h2 className='text-white text-5xl font-bold mb-6'>Enjoy up your vacations in the best T-shirts</h2>
               <p className='text-slate-200 text-[22px] font-medium mb-6'>T-shirts that keep you moving.</p>
               <button className='px-5 py-3 bg-white rounded-2xl font-bold mr-10 text-black hover:bg-[#2ebb77] hover:text-white'>Shop Now  <ArrowForwardIcon /></button>
               <button className='px-5 py-3 bg-white rounded-2xl font-bold text-black hover:bg-[#2ebb77] hover:text-white'>Contact Us  <ArrowForwardIcon /></button>
            </div>
            <div className='mr-20'>
               <img src="https://teespace.store/wp-content/uploads/2023/08/banner-111.png" alt='' />
            </div>
         </div>

         <div className='flex justify-center gap-16 mt-20'>
            <div className='text-center'>
               <PublicIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Worldwide Shipping</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Get free shipping over $50.</p>
            </div>
            <div className='text-center'>
               <SettingsBackupRestoreIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Returns</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Within 30 days for an exchange.</p>
            </div>
            <div className='text-center'>
               <CallIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Online Support</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Top notch customer service.</p>
            </div>
            <div className='text-center'>
               <PaymentIcon className='text-[#2ebb77] mb-4' style={{ fontSize: "48px" }} />
               <h6 className='font-bold text-lg mb-2'>Flexible Payment</h6>
               <p className='text-[#7e7e7e] text-[15px]'>Pay with Multiple Credit Cards</p>
            </div>
         </div>
      </div>
   )
}

export default HomePage