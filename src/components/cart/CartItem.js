import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../state/cart/Action';

const CartItem = ({productItem}) => {
   const dispatch = useDispatch();
   const handleUpdateCartItem = (num) => {
      const updatedQuantity = productItem.quantity + num;
      const data = { cartItemId: productItem.id, data: { quantity: updatedQuantity } };
      dispatch(updateCartItem(data));
      console.log("goi lai updateCartItem");
   }
   const handleRemoveCartItem = () => {
      dispatch(removeCartItem(productItem.id))
   }
   return (
      <div className='p-5 shadow-lg border rounded-md mb-3'>
         <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
               <img className='w-full h-full object-cover object-top' src={productItem.product.imageUrl} alt='' />
            </div>
            <div className='ml-5 space-y-1'>
               <p className='font-semibold'>{productItem.product.title}</p>
               <p className='opacity-70'>Size: {productItem.size}, {productItem.product.color}</p>
               <p className='opacity-70 mt-2'>Seller: {productItem.product.brand}</p>
               <div className=" flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
                  <p className="font-semibold">${productItem.product.discountedPrice}</p>
                  <p className='opacity-50 line-through'>${productItem.product.price}</p>
                  <p className='text-green-600 font-semibold'>{productItem.product.discountPrecent}% Off</p>
               </div>
            </div>
         </div>
         <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
               <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={productItem.quantity<=1}>
                  <RemoveCircleOutlineIcon />
               </IconButton>
               <span className='py-1 px-7 border rounded-sm'>{productItem.quantity}</span>
               <IconButton sx={{color:"#9155fd"}} onClick={() => handleUpdateCartItem(1)}>
                  <AddCircleOutlineIcon />
               </IconButton>
            </div>
            <div>
               <Button onClick={handleRemoveCartItem} sx={{color:"#9155fd"}}>remove</Button>
            </div>
         </div>
      </div>
   )
}

export default CartItem