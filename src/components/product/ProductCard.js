import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
import Badge from '../../pages/homePage/Badge';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { BsSuitHeartFill } from 'react-icons/bs';

function ProductCard({ product }) {
   const navigate = useNavigate();
   return (
      <div onClick={() => navigate(`/product/${product.id}`)} className="w-full relative group p-3 rounded-xl bg-slate-200 hover:scale-110 duration-500">
         <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
            <div>
               <img className="w-full h-full rounded-lg" src={product.imageUrl} alt='' />
            </div>
            <div className="absolute top-6 left-2">
               {<Badge text="New" />}
            </div>
            <div className="w-full h-28 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
               <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                  <li
                     className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                  >
                     Add to Cart
                     <span>
                        <FaShoppingCart />
                     </span>
                  </li>
                  <li
                     className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                  >
                     View Details
                     <span className="text-lg">
                        <MdOutlineLabelImportant />
                     </span>
                  </li>
                  <li
                     className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                  >
                     Add to Wish List
                     <span>
                        <BsSuitHeartFill />
                     </span>
                  </li>
               </ul>
            </div>
         </div>
         <div className="max-w-80 flex flex-col gap-1 px-4">
            <div className="flex items-center justify-between font-titleFont">
               <h2 className="text-lg text-black font-bold">
                  {product.brand}
               </h2>
               <p className="text-[#767676] text-[14px]">${product.discountedPrice}</p>
            </div>
            <div>
               <p className="text-[#767676] text-[14px]">{product.discountPersent}</p>
            </div>
         </div>
      </div>
   )
}

export default ProductCard