import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
import Badge from '../../pages/homePage/Badge';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineLabelImportant } from 'react-icons/md';
import { BsSuitHeartFill } from 'react-icons/bs';

function ProductCard({ product }) {
   const navigate = useNavigate();
   const formatCurrency = (value) => {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
   }

   return (
      <div onClick={() => navigate(`/product/${product.id}`)} className="w-full relative group p-3 rounded-xl bg-slate-200 hover:scale-110 duration-500">
         <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
            <div>
               <img className="w-full h-full rounded-lg" src={product.imageUrl} alt='' />
            </div>
            <div className="absolute top-6 left-2">
               {<Badge text="New" />}
            </div>
            <div className="w-full h-14 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700 py-10">
               <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                  <li
                     className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                  >
                     Thêm và giỏ hàng
                     <span>
                        <FaShoppingCart />
                     </span>
                  </li>
                  <li
                     className="text-[#767676] hover:text-black text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-black flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                  >
                     Chi tiết sản phẩm
                     <span className="text-lg">
                        <MdOutlineLabelImportant />
                     </span>
                  </li>
               </ul>
            </div>
         </div>
         <div className="max-w-80 flex flex-col gap-1 px-4">
            <h2 className="text-lg text-black font-bold">
               {product.title}
            </h2>
            <div className="flex items-center justify-between font-titleFont">
               <div>
                  <p className="text-xs text-black italic">
                     {product.brand}
                  </p>
               </div>
               <p className="text-black text-[14px] font-bold ">{formatCurrency(product.price)}</p>
            </div>
            <div>
               <p className="text-black text-[14px]">{product.discountPersent}</p>
            </div>
         </div>
      </div>
   )
}

export default ProductCard