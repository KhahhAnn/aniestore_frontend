import React from 'react'
import "./BlogPage.css"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
const BlogPage = () => {
   return (
      <div className=''>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>Blog</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span class="delimiter"></span>
            <span className='mr-2'>Blog</span>
         </div>

         <div className='text-center'>
            <h3 className='font-bold text-4xl mb-4'>We can make your work better</h3>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>April 14, 2024</a>
            <span class="delimiter"></span>
            <span className='mr-2'>by <span className='font-bold'>admin</span></span>
            <img className='mx-auto mt-6 rounded-xl' src='https://teespace.harutheme.com/market/wp-content/uploads/sites/5/2021/05/blog-11.jpg' alt='' />
         </div>
         <p className='text-[#7e7e7e] font-medium text-base mx-16 mt-10'>Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa.Maecenas id justo rhoncus, volutpat nunc sit amet, facilisiulum scelerisque dictum Maecenas id justo rhoncus, volutpat nunc sit amet, facilisis sem. Vestibulum scelerisque dictsap.</p>
         <div className='mt-20'>
            <div className="ml-[720px] mb-4">
               <FormatQuoteIcon style={{ fontSize: "60px", color: "#2EBB77" }} />
            </div>
            <p className='font-bold text-2xl text-center mx-auto max-w-[80%]'>I think it’s important people see themselves in film, but it’s even more important they see people they maybe don’t know as well.</p>
         </div>
         <div className='mx-16 mt-10 max-w-[90%]'>
            <p className='text-[#7e7e7e] text-base'>
               Fusce eget malesuada eros. Vivamus eros dolor, auctor aliquet dolor sit amet, euismod imperdiet ex. Nam sed nulla sed massa suscipit feugiat.
               Mauris et nunc ornare, placerat ex ac, interdum magna. Vestibulum urna massa, hendrerit sed fringilla in, mollis vitae tellus. Vestibulum mattis nulla elementum tristique fringilla.
               Morbi in sollicitudin erat. Ut quis tristique mauris. Proin risus purus, iaculis a orci ut, cursus bibendum panisl. Duis aliquam gravida eros eget molestie.
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pharetra, arcu eu porta aliquet, eros dui tincidunt purus, eu vehicula magna nisl in purus.
            </p>
            <p className='text-[#7e7e7e] text-base mt-6'>
               Vivamus eros dolor, auctor aliquet dolor sit amet, euismod imperdiet ex. Nam sed nulla sed massa suscipit feugiat. Mauris et nunc ornare, placerat ex ac, interdum magna.
               Vestibulum urna massa, hemolli
            </p>
         </div>

         <div className='mx-16 my-10 flex justify-between'>
            <div className='flex gap-4 text-[#9b9b9b]'>
               <p className='cursor-pointer hover:text-[#2ebb77]'>#company</p>
               <p className='cursor-pointer hover:text-[#2ebb77]'>#printing</p>
               <p className='cursor-pointer hover:text-[#2ebb77]'>#printshop</p>
            </div>
            <div className='flex gap-4'>
               <p className='font-bold text-base mt-3'>Share:</p>
               <FacebookIcon className='p-3 border-[1px] border-slate-300 rounded-full hover:bg-[#2ebb77] icon-hover' style={{ fontSize: "50px" }} />
               <TwitterIcon className='p-3 border-[1px] border-slate-300 rounded-full hover:bg-[#2ebb77] icon-hover' style={{ fontSize: "50px" }} />
               <LinkedInIcon className='p-3 border-[1px] border-slate-300 rounded-full hover:bg-[#2ebb77] icon-hover' style={{ fontSize: "50px" }} />
               <PinterestIcon className='p-3 border-[1px] border-slate-300 rounded-full hover:bg-[#2ebb77] icon-hover' style={{ fontSize: "50px" }} />
               <TelegramIcon className='p-3 border-[1px] border-slate-300 rounded-full hover:bg-[#2ebb77] icon-hover' style={{ fontSize: "50px" }} />
            </div>
         </div>
         <hr></hr>
         <div className='my-10'>
            <h3 className='font-bold text-center text-3xl mb-10'>You may also like this</h3>
            <div className='flex justify-center gap-4 mx-16'>
               <div className='text-center'>
                  <img className='rounded-xl mb-4' src='https://teespace.harutheme.com/market/wp-content/uploads/sites/5/2021/05/blog-15.jpg' alt='' />
                  <p className='p-1 bg-[#f5f5f5] text-[#2ebb77] rounded-2xl max-w-[100px] font-bold mx-auto mb-4 cursor-pointer hover:bg-[#2ebb77] hover:text-white'>Print Shop</p>
                  <h6 className='font-bold text-xl cursor-pointer hover:text-[#2ebb77]'>Last printing website you need for WordPress</h6>
               </div>
               <div className='text-center'>
                  <img className='rounded-xl mb-4' src='	https://teespace.harutheme.com/market/wp-content/uploads/sites/5/2021/05/blog-6.jpg' alt='' />
                  <div className='flex justify-center gap-4'>
                     <p className='p-1 bg-[#f5f5f5] text-[#2ebb77] rounded-2xl max-w-[130px] font-bold mb-4 cursor-pointer hover:bg-[#2ebb77] hover:text-white'>Print Company</p>
                     <p className='p-1 bg-[#f5f5f5] text-[#2ebb77] rounded-2xl max-w-[100px] font-bold mb-4 cursor-pointer hover:bg-[#2ebb77] hover:text-white'>Print Shop</p>
                  </div>
                  <h6 className='font-bold text-xl cursor-pointer hover:text-[#2ebb77]'>Last printing website you need for WordPress</h6>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogPage