import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ConfigProvider, Input, Space } from 'antd';
import "./ProfilePage.css"
import { Grid, MenuItem, TextField } from '@mui/material';
import { TinyColor } from '@ctrl/tinycolor';
import axios from 'axios';
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
   const { firstName, lastName, email, mobile } = auth.user;


   console.log(auth.user.addressList[0]);

   const fetchProvinces = async () => {
      try {
         const response = await axios.get('https://vapi.vnappmob.com/api/province/');
         setProvinces(response.data.results);
      } catch (error) {
         console.error('Error fetching provinces:', error);
      }
   };



   const fetchDistricts = async (provinceId) => {
      try {
         const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`);
         setDistricts(response.data.results);
      } catch (error) {
         console.error('Error fetching districts:', error);
      }
   };

   const fetchWard = async (districtId) => {
      try {
         const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`);
         setWards(response.data.results);
         console.log(response);
      } catch (error) {
         console.error('Error fetching provinces:', error);
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
   useEffect(() => {
      fetchProvinces();
   }, []);
   return (
      <div>
         <div className='mx-auto text-center bg-[#F5F5F5] py-20'>
            <h2 className='font-bold text-[40px] mb-4'>Account</h2>
            <a href='/' className='text-[#7e7e7e] text-[15px] ml-2 hover:text-[#2ebb77]'>Home</a>
            <span className="delimiter"></span>
            <span className='mr-2'>Account</span>
         </div>
         <div className='mx-auto max-w-[70%] p-5 border-[1px] border-[rgba(0, 0, 0, .125)] mt-20 grid justify-between' style={{ gridTemplateColumns: "30% 65%" }}>
            <div className='flex flex-col gap-5'>
               <div className={`hover:bg-slate-100 rounded-md ${activeTab === 'general' && 'bg-slate-100'}`} onClick={() => setActiveTab('general')}>
                  <p className={`pl-2 text-[#495057] ${activeTab === 'general' && 'font-bold text-black'}`}>General</p>
               </div>
               <div className={`hover:bg-slate-100 rounded-md ${activeTab === 'password' && 'bg-slate-100'}`} onClick={() => setActiveTab('password')}>
                  <p className={`pl-2 text-[#495057] ${activeTab === 'password' && 'font-bold text-black'}`}>Change password</p>
               </div>
               <div className={`hover:bg-slate-100 rounded-md ${activeTab === 'infor' && 'bg-slate-100'}`} onClick={() => setActiveTab('infor')}>
                  <p className={`pl-2 text-[#495057] ${activeTab === 'infor' && 'font-bold text-black'}`}>Infor</p>
               </div>
            </div>
            <div className='flex flex-col'>
               {activeTab === 'general' && (
                  <>
                     <div className='flex flex-row gap-5'>
                        <img className='w-[80px] h-auto object-cover' src='https://bootdey.com/img/Content/avatar/avatar1.png' alt='#' />
                        <div className='flex flex-col my-auto'>
                           <Button className='text-[#007bff] border-[1px] border-[#007bff]'>Upload new photo</Button>
                        </div>
                     </div>
                     <div className='flex flex-col gap-4 mt-5'>
                        <div>
                           <label>First name: </label>
                           <Input defaultValue={firstName} />
                        </div>
                        <div>
                           <label>Last name: </label>
                           <Input defaultValue={lastName} />
                        </div>
                        <div>
                           <label>Email: </label>
                           <Input defaultValue={email} />
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[20%]">
                           Save
                        </button>
                     </div>
                  </>
               )}
               {activeTab === 'password' && (
                  <div className='flex flex-col gap-4 mt-5'>
                     <div>
                        <label>Current password: </label>
                        <Input />
                     </div>
                     <div>
                        <label>New password: </label>
                        <Input />
                     </div>
                     <div>
                        <label>Repeat new password: </label>
                        <Input />
                     </div>
                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[30%]">
                        Save password
                     </button>
                  </div>
               )}
               {activeTab === 'infor' && (
                  <div className='flex flex-col gap-4 mt-5'>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           select
                           label="Select Province"
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
                           label="Select District"
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
                           label="Select War"
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
                        <label>State: </label>
                        <TextArea defaultValue={auth.user.addressList[0].streetAddress} rows={4} />
                     </div>
                     <div>
                        <label>Phone: </label>
                        <Input defaultValue={mobile} />
                     </div>
                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[40%]">
                        Add new infor
                     </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default ProfilePage;
