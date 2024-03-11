import React from 'react'
import AdressCard from '../adressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'

const OrderSummary = () => {
   return (
      <div>
         <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard />
         </div>
         <div className='mt-4'>
            <div className='lg:grid grid-cols-3 relative'>
               <div className='col-span-2'>
                  {[1, 1, 1, 1].map((item) => <CartItem />)}
               </div>
               <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                  <div className='border p-5'>
                     <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                     <hr />
                     <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 text-black'>
                           <span>Price</span>
                           <span>$199</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                           <span>Discount</span>
                           <span className='text-green-600 '>-$10</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                           <span>Delivery Charges</span>
                           <span className='text-green-600 '>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold'>
                           <span>Total Amount</span>
                           <span className='text-green-600 '>$198</span>
                        </div>
                     </div>
                     <Button variant='contained' className='w-full' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", marginTop: 3 }}>
                        Checkout
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default OrderSummary