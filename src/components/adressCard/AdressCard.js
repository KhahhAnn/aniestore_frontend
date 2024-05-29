import React from 'react';

const AdressCard = ({address}) => {
   return (
      <div className='space-y-3'>
      <p className='font-semibold'>{address.firstName} {address.lastName}</p>
      <p>{address.streetAddress}</p>
      <div className='space-y-1'>
         <p className='font-semibold'>Số điện thoại</p>
         <p>{address.mobile}</p>
      </div>
   </div>
   )
}

export default AdressCard