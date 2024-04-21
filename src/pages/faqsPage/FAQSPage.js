import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import React, { useState } from 'react'
import MessageIcon from '@mui/icons-material/Message';

const FAQSPage = () => {
   const data = [
      {
         content: "How does product customization work?",
         des1: " To make a T-shirt design, your first need to install specific graphic design software.Once you’ve done that, start your creation and make sure that your final design is at least 220 PPI so it won’t be pixelated when printed…",
         des2: "To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text.For some of our T-shirts, reverse side printing is also available."
      },
      {
         content: "What products can I customize?",
         des1: " To make a T-shirt design, your first need to install specific graphic design software.Once you’ve done that, start your creation and make sure that your final design is at least 220 PPI so it won’t be pixelated when printed…",
         des2: "To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text.For some of our T-shirts, reverse side printing is also available."
      },
      {
         content: "How are your T-shirts printed?",
         des1: " To make a T-shirt design, your first need to install specific graphic design software.Once you’ve done that, start your creation and make sure that your final design is at least 220 PPI so it won’t be pixelated when printed…",
         des2: "To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text.For some of our T-shirts, reverse side printing is also available."
      },
      {
         content: "What is the best T-shirt material?",
         des1: " To make a T-shirt design, your first need to install specific graphic design software.Once you’ve done that, start your creation and make sure that your final design is at least 220 PPI so it won’t be pixelated when printed…",
         des2: "To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text.For some of our T-shirts, reverse side printing is also available."
      }
   ]
   const [activeItems, setActiveItems] = useState({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
   });

   const onActive = (i) => {
      setActiveItems(prevState => ({
         ...prevState,
         [i]: !prevState[i]
      }));

      for (let key in activeItems) {
         if (key !== i.toString()) {
            setActiveItems(prevState => ({
               ...prevState,
               [key]: false
            }));
         }
      }
   };
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
         <div>
            {data.map((item, index) => (
               <div key={index} className='mb-6'>
                  <div className={`px-6 py-4 max-w-[80%] mx-auto rounded-xl flex justify-between ${activeItems[index] ? 'text-white bg-[#2ebb77]' : 'bg-[#F8F8F8]'}`} onClick={() => onActive(index)}>
                     <h3 className='font-bold text-xl'>{item.content}</h3>
                     {activeItems[index] ? <ArrowDropDown /> : <ArrowDropUp />}
                  </div>
                  <div className={`max-w-[75%] mx-auto mt-4 ${activeItems[index] ? 'block' : 'hidden'}`}>
                     <p className='text-[#7e7e7e] font-medium text-base mb-4'>
                        {item.des1}
                     </p>
                     <p className='text-[#7e7e7e] font-medium text-base'>
                        {item.des2}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         <div className='flex justify-around mt-10'>
            <div className='flex flex-col gap-6'>
               <h3 className='bg-[#EEE5F3] text-[#b479d9] font-bold text-center text-xl rounded-[20px] pl-5 pr-5 max-w-[30%]'>Support</h3>
               <h3 className='font-bold text-4xl max-w-[400px]'>Frequently asked questions</h3>
               <span className='text-[#7e7e7e] font-medium text-base max-w-[500px]'>
                  You’ve got the idea, we’ve got the tools—design your custom clothing with our free design assets:
               </span>
               <h6 className='uppercase font-bold text-sm'><MessageIcon style={{color:"#2ebb77", fontSize:"24px"}}/> Any questions </h6>
               <p className='font-bold text-2xl'>khanhan@admin.com</p>
            </div>
            <div className='max-w-[700px]'>
               {data.map((item, index) => (
                  <div key={index} className='mb-6 w-[700px] '>
                     <div className={`px-6 py-4 mx-auto rounded-xl flex justify-between  ${activeItems[index + 4] ? 'text-white bg-[#2ebb77]' : 'bg-[#F8F8F8]'}`} onClick={() => onActive(index + 4)}>
                        <h3 className='font-bold text-xl'>{item.content}</h3>
                        {activeItems[index + 4] ? <ArrowDropDown /> : <ArrowDropUp />}
                     </div>
                     <div className={`mx-auto mt-4 ${activeItems[index + 4] ? 'inline-block' : 'hidden'}`}>
                        <p className='text-[#7e7e7e] font-medium text-base mb-4'>
                           {item.des1}
                        </p>
                        <p className='text-[#7e7e7e] font-medium text-base'>
                           {item.des2}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
   )
}

export default FAQSPage
