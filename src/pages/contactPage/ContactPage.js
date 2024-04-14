import React from 'react'

function ContactPage() {
   return (
      <div className=''>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>Contact Us</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span class="delimiter"></span>
            <span className='mr-2'>Contact Us</span>
         </div>
         <div>
            <div className='flex justify-around gap-20'>
               <div>
                  <h2 className='font-bold text-[40px] mb-10'>Keep in touch with us</h2>
                  <div className='flex justify-between gap-10'>
                     <div>
                        <h2 className='font-bold text-xl'>Address</h2>
                        <span className='text-slate-600'>90 VanTri BacTuLiem, HaNoi, VietNam</span>
                     </div>
                     <div>
                        <h2 className='font-bold text-xl'>Email</h2>
                        <span  className='text-slate-600'>contact@khahhann.admin</span>
                     </div>
                  </div>
               </div>
               <div>
                  <h2 className='font-bold text-[40px]'>Send a message</h2>
                  <div className='flex justify-between gap-10'>
                     <div>
                        <h2 className='font-bold text-xl'>Address</h2>
                        <span>90 VanTri BacTuLiem, HaNoi, VietNam</span>
                     </div>
                     <div>
                        <h2 className='font-bold text-xl'>Email</h2>
                        <span>contact@khahhann.admin</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactPage