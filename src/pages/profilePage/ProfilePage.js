import { Grid, MenuItem, TextField } from '@mui/material';
import { Alert, Input, Skeleton, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ProfilePage.css";
import { update } from '../../state/authorization/Action';

const { TextArea } = Input;

function ProfilePage() {
   const { auth } = useSelector(store => store);

   const [activeTab, setActiveTab] = useState('general');
   const [provinces, setProvinces] = useState([]);
   const [districts, setDistricts] = useState([]);
   const [wards, setWards] = useState([]);
   const [selectedProvince, setSelectedProvince] = useState('');
   const [selectedDistrict, setSelectedDistrict] = useState('');
   const [selectedWard, setSelectedWard] = useState('');
   const [selectedFile, setSelectedFile] = useState(null);
   const [previewUrl, setPreviewUrl] = useState(null);
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState("");
   const [password, setPassword] = useState({
      currentPassword: "",
      password: "",
      repeatPassword: ""
   })
   const token = localStorage.getItem('jwt');
   const dispatch = useDispatch();
   const [state, setState] = useState({
      firstName: auth.user?.firstName || "",
      lastName: auth.user?.lastName || "",
      email: auth.user?.email || "",
      image: previewUrl,
   });


   console.log("auth: ", auth);


   const handleChange = evt => {
      const value = evt.target.value;
      setState({
         ...state,
         [evt.target.name]: value
      });
      setPassword({
         ...password,
         [evt.target.name]: value
      })
   };
   const fetchProvinces = async () => {
      try {
         const response = await axios.get('https://vapi.vnappmob.com/api/v2/province/');
         setProvinces(response.data.results);
      } catch (error) {
         console.error('Error fetching provinces:', error);
      }
   };

   const fetchDistricts = async (provinceId) => {
      try {
         const response = await axios.get(`https://vapi.vnappmob.com/api/v2/province/district/${provinceId}`);
         setDistricts(response.data.results);
      } catch (error) {
         console.error('Error fetching districts:', error);
      }
   };

   const fetchWard = async (districtId) => {
      try {
         const response = await axios.get(`https://vapi.vnappmob.com/api/v2/province/ward/${districtId}`);
         setWards(response.data.results);
         console.log(response);
      } catch (error) {
         console.error('Error fetching wards:', error);
      }
   };

   const handleProvinceChange = async (event) => {
      const provinceId = event.target.value;
      setSelectedProvince(provinceId);
      setSelectedDistrict('');
      await fetchDistricts(provinceId);
   };

   const handleDistrictChange = async (event) => {
      const districtId = event.target.value;
      setSelectedDistrict(districtId);
      setSelectedWard('');
      await fetchWard(districtId);
   };

   const handleWarChange = (event) => {
      const warId = event.target.value;
      setSelectedWard(warId);
   };

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
         const url = reader.result;
         setPreviewUrl(url);
         setState(prevState => ({
            ...prevState,
            img: url
         }));
      };
      reader.readAsDataURL(file);
   };

   const handleUpdateUser = (event) => {
      event.preventDefault();
      try {
         console.log(token);
         const userData = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
         }
         dispatch(update(userData, token, state.img))
         setIsLoading(false);
         console.log(userData);
         setShowSuccessMessage(true);
         setTimeout(() => {
            setShowSuccessMessage(false);
            setMessage("Lưu thông tin thành công!")
         }, 2000);
      } catch (e) {
         setMessage("Lưu thông tin thất bại!")
      }
   }

   const handleChangePassword = async () => {
      console.log(password.password);
      if (password.password === password.repeatPassword) {
         const changePasswordRequest = {
            currentPassword: password.currentPassword,
            password: password.password,
         };
         try {
            const response = await axios.put('http://localhost:8080/api/users/change-password', changePasswordRequest, {
               headers: {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json"
               }
            });
            console.log(response);
            setIsLoading(false);
            setShowSuccessMessage(true);
            if (response.data === "") {
               setMessage("Đổi mật khẩu thất bại!")
            }
            setTimeout(() => {
               setShowSuccessMessage(false);
               setMessage("Đổi mật khẩu thành công!")
            }, 2000);
         } catch (error) {
            console.error('Error fetching color:', error);
         }
      }
   }

   useEffect(() => {
      fetchProvinces();
      setIsLoading(false);
   }, []);

   if (!auth.user || !auth.user.imageSrc) {
      return <Skeleton active={'true'} />;
   }

   if (isLoading) {
      return <Skeleton active={'true'} />;
   }
   return (
      <div>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>Account</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span className="delimiter"></span>
            <span className='mr-2'>Account</span>
         </div>
         <div className='w-[300px] absolute right-3 mt-16'>
            {showSuccessMessage && (
               <Space
                  direction="vertical"
                  style={{
                     width: '100%',
                  }}
               >
                  <Alert message={message} type="success" showIcon />
               </Space>
            )}
         </div>
         <div className='mx-auto max-w-[70%] p-5 border-[1px] border-[rgba(0, 0, 0, .125)] mt-20 grid justify-between' style={{ gridTemplateColumns: "30% 65%" }}>
            <div className='flex flex-col gap-5'>
               <div className={`hover:bg-slate-100 rounded-md ${activeTab === 'general' && 'bg-slate-100'}`} onClick={() => setActiveTab('general')}>
                  <p className={`pl-2 text-[#495057] ${activeTab === 'general' && 'font-bold text-black'}`}>Thông tin chung</p>
               </div>
               <div className={`hover:bg-slate-100 rounded-md ${activeTab === 'password' && 'bg-slate-100'}`} onClick={() => setActiveTab('password')}>
                  <p className={`pl-2 text-[#495057] ${activeTab === 'password' && 'font-bold text-black'}`}>Mật khẩu</p>
               </div>
               <div className={`hover:bg-slate-100 rounded-md ${activeTab === 'infor' && 'bg-slate-100'}`} onClick={() => setActiveTab('infor')}>
                  <p className={`pl-2 text-[#495057] ${activeTab === 'infor' && 'font-bold text-black'}`}>Địa chỉ</p>
               </div>
            </div>
            <div className='flex flex-col'>
               {activeTab === 'general' && (
                  <>
                     <div className='flex flex-row gap-5'>
                        <img className='w-[100px] h-[100px] object-cover rounded-full' name='img' src={previewUrl === null ? auth.user?.imageSrc : previewUrl} alt='#' />
                        <div className='flex flex-col my-auto'>
                           <input type="file" onChange={handleFileChange} name='image' />
                        </div>
                     </div>
                     <div className='flex flex-col gap-4 mt-5'>
                        <div>
                           <label>Họ và tên đệm: </label>
                           <Input defaultValue={auth.user?.firstName} name='firstName' onChange={handleChange} />
                        </div>
                        <div>
                           <label>Tên: </label>
                           <Input defaultValue={auth.user?.lastName} name='lastName' onChange={handleChange} />
                        </div>
                        <div>
                           <label>Email: </label>
                           <Input defaultValue={auth.user?.email} name='email' onChange={handleChange} />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[20%]" onClick={handleUpdateUser}>
                           Lưu
                        </button>
                     </div>
                  </>
               )}
               {activeTab === 'password' && (
                  <div className='flex flex-col gap-4 mt-5'>
                     <div>
                        <label>Mật khẩu hiện tại: </label>
                        <Input type='password' name='currentPassword' onChange={handleChange} />
                     </div>
                     <div>
                        <label>Mật khẩu mới: </label>
                        <Input type='password' name='password' onChange={handleChange} />
                     </div>
                     <div>
                        <label>Nhập lại mật khẩu: </label>
                        <Input type='password' name='repeatPassword' onChange={handleChange} />
                     </div>
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[30%]" onClick={handleChangePassword}>
                        Đổi mật khẩu
                     </button>
                  </div>
               )}
               {activeTab === 'infor' && (
                  <div className='flex flex-col gap-4 mt-5'>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           select
                           label="Chọn thành phố"
                           value={selectedProvince}
                           onChange={handleProvinceChange}
                           fullWidth

                        >
                           {provinces.map((province) => (
                              <MenuItem key={province.province_id} value={province.province_id}>
                                 {province.province_name}
                              </MenuItem>
                           ))}
                        </TextField>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           select
                           label="Chọn huyện"
                           value={selectedDistrict}
                           onChange={handleDistrictChange}
                           fullWidth
                        >
                           {districts.map((district) => (
                              <MenuItem key={district.district_id} value={district.district_id}>
                                 {district.district_name}
                              </MenuItem>
                           ))}
                        </TextField>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           select
                           label="Chọn xã"
                           value={selectedWard}
                           onChange={handleWarChange}
                           fullWidth
                        >
                           {wards.map((ward) => (
                              <MenuItem key={ward.ward_id} value={ward.ward_id}>
                                 {ward.ward_name}
                              </MenuItem>
                           ))}
                        </TextField>
                     </Grid>
                     <div>
                        <label>Dịa chỉ chi tiết: </label>
                        <TextArea defaultValue={auth?.user?.addressList[0]?.streetAddress} rows={4} />
                     </div>
                     <div>
                        <label>Số điện thoại: </label>
                        <Input defaultValue={auth.user?.mobile} />
                     </div>
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[40%]">
                        Thêm địa chỉ mới
                     </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default ProfilePage;
