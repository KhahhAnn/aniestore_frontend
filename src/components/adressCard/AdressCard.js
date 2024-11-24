import { Button } from "antd";

const AddressCard = ({ address, handleAddress }) => {
   return (
      <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 space-y-6">
         <div className="flex flex-col ">
            <div className="space-y-1">
               <p className="font-semibold text-gray-800 text-lg"><span className="italic">Họ tên người nhận:</span>  {address.firstName} {address.lastName}</p>
            </div>
            <div className="space-y-1">
               <p className="font-semibold text-gray-800 text-"><span className="italic">Địa chỉ người nhận:</span> {address.streetAddress}</p>
            </div>
            <div className="space-y-1">
               <p className="font-semibold text-gray-800 text-lg"><span className="italic">Số điện thoại: </span> {address.mobile}</p>
            </div>
         </div>

         <Button 
            type="primary" 
            onClick={() => handleAddress(address)} 
            size="large"
            className="w-full mt-4 py-3 rounded-lg bg-[#2ebb77] text-white hover:bg-[#2ebb77] transition duration-300"
         >
            Chọn địa chỉ
         </Button>
      </div>
   );
}

export default AddressCard;
