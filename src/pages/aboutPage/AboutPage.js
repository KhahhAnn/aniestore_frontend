import React from 'react'
import './AboutPage.css'
import DoneIcon from '@mui/icons-material/Done'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function AboutPage() {
   return (
      <div className='mb-60'>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>About Us</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span class="delimiter"></span>
            <span className='mr-2'>About Us</span>
         </div>

         <div className='flex justify-center items-center gap-10 mx-20 my-28'>
            <div>
               <div>
                  <div className='flex flex-col flex-nowrap gap-10'>
                     <div className='flex flex-row'>
                        <h3 style={{ fontSize: "18px", backgroundColor: "rgb(180, 121, 217, 40%)", borderRadius: "20px", padding: "5px", color: "#B479D9", fontWeight: "bold", paddingLeft: "20px", paddingRight: "20px" }}> Design your own</h3>
                     </div>
                     <div>
                        <h1 className='font-bold text-5xl justify-center content-center mb-8 .haru-heading-title'>
                           Create stunning print for <span>your business</span>
                        </h1>
                        <p className='text-slate-400 font-medium'>T-shirt Printing for Everyone. Get a headstart with free design templates you can customize in a few clicks.</p>
                     </div>
                     <div>
                        <div>
                           <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} />Top quality prints using the latest technology</h3>
                        </div>
                        <div>
                           <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} />Mix and match colors, sizes, and designs</h3>
                        </div>
                        <div>
                           <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} />Fast and free standard shipping</h3>
                        </div>
                        <div>
                           <h3 className='font-medium text-base'> <DoneIcon style={{ color: "11B196" }} />Customer happiness guarantee</h3>
                        </div>
                     </div>
                     <div>
                        <button className='text-white font-bold text-base' style={{ backgroundColor: "#2EBB77", padding: "10px", borderRadius: "10px" }}>Custom T-shirt</button>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className='conainer-scale'>
                  <img className='rounded-xl scale' src='https://teespace.harutheme.com/market/wp-content/uploads/sites/5/2022/10/banner-54.jpg' alt='' />
               </div>
               <div className='conainer-scale'>
                  <img className='absolute z-10 right-2 top-[700px] w-[290px] object-cover rounded-xl scale' src='https://teespace.harutheme.com/market/wp-content/uploads/sites/5/2022/10/banner-55.jpg' alt='' />
               </div>
            </div>
         </div>
         <div className='flex justify-items-center justify-between bg-[#64CB9A] mt-20'>
            <div className='my-auto max-w-xl ml-20'>
               <h2 className='text-white text-5xl font-bold mb-6'>Enjoy up your vacations in the best T-shirts</h2>
               <p className='text-slate-200 text-[22px] font-medium mb-6'>T-shirts that keep you moving.</p>
               <button className='px-5 py-3 bg-white rounded-2xl font-bold mr-10 hover:bg-[#2ebb77] hover:text-white'>Shop Now  <ArrowForwardIcon /></button>
               <button className='px-5 py-3 bg-white rounded-2xl font-bold hover:bg-[#2ebb77] hover:text-white'>Contact Us  <ArrowForwardIcon /></button>
            </div>
            <div className='mr-20'>
               <img src="https://teespace.store/wp-content/uploads/2023/08/banner-111.png" alt='' />
            </div>
         </div>
      </div>
   )
}

export default AboutPage