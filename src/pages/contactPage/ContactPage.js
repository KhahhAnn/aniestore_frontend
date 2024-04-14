import { TextField } from '@mui/material';
import React from 'react';

function ContactPage() {
   return (
      <div className=''>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>Contact Us</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span class="delimiter"></span>
            <span className='mr-2'>Contact Us</span>
         </div>
         <div className='mt-20'>
            <div className='flex justify-around gap-20'>
               <div>
                  <h2 className='font-bold text-[40px] mb-10'>Keep in touch with us</h2>
                  <div className='flex justify-between gap-10'>
                     <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-xl'>Address</h2>
                        <span>Mobile: <span className='font-bold'>068 26589 996</span></span>
                        <span>Hotline: <span className='font-bold'>1900 26886</span></span>
                        <span>90 VanTri BacTuLiem, HaNoi, VietNam</span>
                     </div>
                     <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-xl'>Email</h2>
                        <span className='text-slate-600'>contact@khahhann.admin</span>
                     </div>
                  </div>
               </div>
               <div>
                  <h2 className='font-bold text-[40px] mb-10'>Send a message</h2>
                  <div className='flex flex-col justify-between gap-10'>
                     <div className='flex gap-4'>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                     </div>
                     <TextField id="outlined-basic" label="Subject" variant="outlined" />
                     <TextField id="outlined-basic" label="Message" variant="outlined" rows={6} />
                     <button className='text-white font-bold text-base py-4 bg-[#2EBB77] rounded-xl hover:bg-[#29a76a]'>Submit</button>
                  </div>
               </div>
            </div>
         </div>
         <div className='mt-20'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.3743926552797!2d105.7436633!3d21.0577039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455a030b328db%3A0xa56d0753a1f0320e!2zOTcgTmfDtSA3MCBWxINuIFRyw6wsIE1pbmggS2hhaSwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1713108035670!5m2!1svi!2s" className='w-[95%] h-[800px] mx-10 mt-10' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>
   )
}

export default ContactPage