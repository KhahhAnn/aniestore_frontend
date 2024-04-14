import React from 'react'

const FAQSPage = () => {
   return (
      <div className=''>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>FAQS</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span class="delimiter"></span>
            <span className='mr-2'>FAQs</span>
         </div>
         <div>
            <div className='text-center my-10'>
               <h2 className='font-bold text-4xl mb-6'>Frequently asked questions</h2>
               <p className='text-[#7e7e7e] text-xl'>Let us show you how your product come to life.</p>
            </div>
         </div>
      </div>
   )
}

export default FAQSPage