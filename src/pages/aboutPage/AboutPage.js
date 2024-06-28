import React from 'react'
import './AboutPage.css'
import DoneIcon from '@mui/icons-material/Done'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function AboutPage() {
   return (
      <div className=''>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>About Us</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span class="delimiter"></span>
            <span className='mr-2'>About Us</span>
         </div>

         <div className='flex justify-center items-center gap-10 mx-20 my-28'>
            <div>
               <div>
                  <div className='flex flex-col flex-nowrap gap-10'>
                     <div style={{width: "700px"}}>
                        <h1 className='font-bold text-5xl justify-center content-center mb-8 .haru-heading-title'>
                           Câu chuyện của AnieStore
                        </h1>
                        <p className='text-slate-400 font-medium' >
                           CHỌN LỐI ĐI TÁCH BIỆT NGAY TỪ ĐẦU, ZUNE ZX MANG TRONG MÌNH ĐAM MỀ MÃNH LIỆT VÀ TÌNH YÊU TO LỚN ĐỐI VỚI PHONG CÁCH THỜI TRANG PHI GIỚI TÍNH CŨNG VĂN HOÁ NHẬT BẢN.
                        </p>
                        <p className='text-slate-400 font-medium'>
                           VỚI NIỀM CẢM HỨNG VÔ TẬN ĐÓ, CÁC SẢN PHẨM CỦA ZUNE ZX MANG ĐẬM HƠI THỞ VÀ TINH THẦN TỪ XỨ SỞ PHÙ TANG VỚI NHỮNG MẢNG MÀU ĐƠN SẮC CHẤM PHÁ ĐEN TRẮNG - ĐÓ, LEN LỚI TRONG ĐÓ LÀ DẤU ẤN VÀ CÂU CHUYỆN, THÔNG ĐIỆP CỦA TUỔI TRẺ.
                        </p>
                        <p className='text-slate-400 font-medium'>
                           VỚI MONG MUỐN CÓ THỂ LAN TRUYỀN NHỮNG THÔNG ĐIỆP TÍCH CỰC VỀ THỜI TRANG ZUNEZX ĐÃ VÀ ĐANG KHÔNG NGỪNG CÓ CÁNG PHÁT TRIỂN MỖI NGÀY ĐỂ CÓ THỂ ĐẾN GẦN HƠN VỚI KHÁCH HÀNG Ở MỌI NƠI VÀ MỌI LỨA TUỔI
                        </p>
                        <p className='text-slate-400 font-medium'>
                           ZUNE ZX LÀ NƠI ĐỂ NHỮNG TÂM HỒN ĐỒNG ĐIỆU CÓ THỂ TÌM THẤY THANH ÂM CỦA NHAU, NƠI KHÔNG AI CẢM THẤY LẠC LÔNG VÌ CÁ TÍNH CỦA CHÍNH MÌNH, NƠI CHẲNG AI ĐÁNH GIÁ CÁCH BẠN SỐNG NHƯ THẾ NÀO, ĂN MẶC KHÁC BIỆT LÀM SAO. 
                        </p>
                        <p className='text-slate-400 font-medium'>
                           TẠI ĐÂY TẤT CẢ CHÚNG TA SẼ HOA THÀNH MỘT DÂN HỢP XƯỞNG CỦA TUỔI TRẺ BẤT DIỆT, THẬT NHIỀU SAI LẦM, THẬT NHIỀU KHÁT KHAO, NHƯNG XỨNG ĐÁNG VÀ CHẲNG BAO GIỜ HỐI TIẾC.
                           "EVERYBODY'S YOUTH IS A DREAM, A FORM OF CHEMICAL MADNESS.
                        </p>
                     </div>
                     <div>
                        <div>
                           <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} /> Địa chỉ: 90 Văn Trí, quận Bắc Từ Liêm, thành phố Hà Nội </h3>
                        </div>
                        <div>
                           <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} /> Zalo: 0869548785 </h3>
                        </div>
                        <div>
                           <h3 className='font-medium text-base mb-4'> <DoneIcon style={{ color: "11B196" }} /> Hotline: 0846985574 </h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className='conainer-scale'>
                  <img className='rounded-xl scale' src='https://i.pinimg.com/564x/f9/83/fa/f983fa8a3198d8f77f08ceb87e25f4e3.jpg' alt='' />
               </div>
               <div className='conainer-scale'>
                  <img className='absolute z-10 right-2 top-[700px] w-[290px] object-cover rounded-xl scale' src='https://i.pinimg.com/736x/c0/8e/d5/c08ed5b4a8f055b3d1bf96c6142cf53c.jpg' alt='' />
               </div>
            </div>
         </div>

         <div>
            <div className='flex justify-center gap-10 text-center mt-10'>
               <div>
                  <div className='conainer-scale'>
                     <img className='w-[300px] h-[300px] rounded-lg scale' src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/410502438_1802142066949885_4237457411996902523_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUYJcsq3FrFOL_maQ7jcdR04iqM2D5Yb3TiKozYPlhvaEQvFjXkxQXYc_y2VQurSSvKdjFLqpmHbRt7TaBkNX1&_nc_ohc=vnxOedpT-u0Ab4Tc2au&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAStzljeqaxEyUgyffgqeBH9-uVBsOJ6XAShaB3XChaYg&oe=662119BE" alt='' />
                     <div className='absolute z-10 top-[1430px] ml-[90px] flex gap-5 justify-center team-icon'>
                        <FacebookIcon  className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black color team-icon' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                        <InstagramIcon className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black team-icon' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                     </div>
                  </div>
                  <h3 className='font-bold text-2xl cursor-pointer hover:text-[#2ebb77]'>Khánh An</h3>
                  <span className='text-[#7e7e7e]'>Coder</span>
               </div>
               <div>
                  <div className='conainer-scale'>
                     <img className='w-[300px] h-[300px] rounded-xl scale' src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/432011896_1605372270276571_3152325909812518674_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFL0OXn6Q4rEH0ItdrdM2aG_Q9aIUKqE9b9D1ohQqoT1m1SCorQ_jsVbvRFK_JIQSXteJACqTzAY4usqHmMvvS5&_nc_ohc=iV9tO-YTBxIAb6CO0Sf&_nc_ht=scontent.fhan2-3.fna&oh=00_AfARSLia25bZKC7rohnDCce-QcpBEgCHjqiqtL17saCLNw&oe=6621415E" alt='' />
                     <div className='absolute z-10 top-[1430px] ml-[90px] flex gap-5 justify-center team-icon'>
                        <FacebookIcon className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black ' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                        <InstagramIcon className='p-2 rounded-full border-2 border-[#eee] bg-white hover:bg-black hover:border-black' style={{ color: "#9b9b9b", fontSize: "45px" }} />
                     </div>
                  </div>
                  <h3 className='font-bold cursor-pointer text-2xl hover:text-[#2ebb77]'>Thu Huyền</h3>
                  <span className='text-[#7e7e7e]'>Coder</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutPage