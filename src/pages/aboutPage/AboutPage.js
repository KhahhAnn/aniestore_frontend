import React from 'react'
import './AboutPage.css'
import DoneIcon from '@mui/icons-material/Done'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function AboutPage() {
   return (
      <div className=''>
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

         <div>
            <h2 className='font-bold text-[40px] text-center mt-10'>Meet our team!</h2>
            <div className='flex justify-center gap-10 text-center mt-10'>
               <div>
                  <div className='conainer-scale'>
                     <img className='w-[300px] h-[300px] rounded-lg scale' src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/410502438_1802142066949885_4237457411996902523_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gjJ0x3M-xyAQ7kNvgEu39QD&_nc_ht=scontent.fhan14-2.fna&oh=00_AYA4CI23GBPrnQhykxlVHkAJ2nTd-IxPhsm2LrTwjcdGqg&oe=665D4E3E" alt='' />
                     <div className='absolute z-10 top-[1400px] ml-[90px] flex gap-5 justify-center team-icon'>
                        <FacebookIcon  className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black color team-icon' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                        <InstagramIcon className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black team-icon' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                     </div>
                  </div>
                  <h3 className='font-bold text-2xl cursor-pointer hover:text-[#2ebb77]'>Khánh An</h3>
                  <span className='text-[#7e7e7e]'>Coder</span>
               </div>
               <div>
                  <div className='conainer-scale'>
                     <img className='w-[300px] h-[300px] rounded-xl scale' src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/438969791_1625201104960354_5355543574708253934_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kNGJcewqF3YQ7kNvgHO74Js&_nc_ht=scontent.fhan14-1.fna&oh=00_AYA8_kbaRSYQUn5LXs2UzwvD5HPa3KrpQtr0nMOzwwk1Iw&oe=665D5555" alt='' />
                     <div className='absolute z-10 top-[1400px] ml-[90px] flex gap-5 justify-center team-icon'>
                        <FacebookIcon className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black ' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                        <InstagramIcon className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                     </div>
                  </div>
                  <h3 className='font-bold cursor-pointer text-2xl hover:text-[#2ebb77]'>Thu Huyền</h3>
                  <span className='text-[#7e7e7e]'>Coder</span>
               </div>
            </div>
            <div className='text-center px-2 py-2 border-2 border-inherit max-w-40 mx-auto rounded-xl cursor-pointer hover:bg-[#2ebb77] hover:text-white mt-10'>
               <h3 className='font-bold'>Join Our Team</h3>
            </div>
         </div>

         <div className='flex justify-items-center justify-between bg-[#64CB9A] mt-20'>
            <div className='my-auto max-w-xl ml-20'>
               <h2 className='text-white text-5xl font-bold mb-6'>Enjoy up your vacations in the best T-shirts</h2>
               <p className='text-slate-200 text-[22px] font-medium mb-6'>T-shirts that keep you moving.</p>
               <button className='px-5 py-3 bg-white rounded-2xl text-black font-bold mr-10 hover:bg-[#2ebb77] hover:text-white'>Shop Now  <ArrowForwardIcon /></button>
               <button className='px-5 py-3 bg-white rounded-2xl text-black font-bold hover:bg-[#2ebb77] hover:text-white'>Contact Us  <ArrowForwardIcon /></button>
            </div>
            <div className='mr-20'>
               <img src="https://teespace.store/wp-content/uploads/2023/08/banner-111.png" alt='' />
            </div>
         </div>
      </div>
   )
}

export default AboutPage