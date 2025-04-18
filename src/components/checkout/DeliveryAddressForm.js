import { Box, Button, Grid, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdressCard from '../adressCard/AdressCard'
import { useDispatch } from 'react-redux'
import { createOrder, createOrderByAddress } from '../../state/order/Action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Skeleton } from 'antd';

function DeliveryAddressForm() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [provinces, setProvinces] = useState([]);
   const [districts, setDistricts] = useState([]);
   const [selectedProvince, setSelectedProvince] = useState('');
   const [selectedDistrict, setSelectedDistrict] = useState('');
   const [addressList, setAddressList] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const address = {
         firstName: data.get("firstName"),
         lastName: data.get("lastName"),
         streetAddress: data.get("address"),
         city: data.get("city"),
         state: data.get("state"),
         zipCode: data.get("zipCode"),
         mobile: data.get("mobile"),
      }
      const orderData = { address, navigate };
      dispatch(createOrder(orderData));
      setIsLoading(false);
      console.log(address);
   }

   const navigateWithAddress = (address) => {
      const orderData = { address, navigate };
      dispatch(createOrderByAddress(orderData));
   }

   const fetchData = async () => {
      try {
         const token = localStorage.getItem("jwt");
         const response = await axios.get('http://localhost:8080/api/address', {
            headers: {
               "Authorization": `Bearer ${token}`
            }
         });
         setAddressList(response.data);
         setIsLoading(false);
         console.log(response);
      } catch (error) {
         console.error('Error fetching color:', error);
      }
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

   const handleProvinceChange = async (event) => {
      const provinceId = event.target.value;
      setSelectedProvince(provinceId);
      setSelectedDistrict('');
      await fetchDistricts(provinceId);
   };

   const handleDistrictChange = (event) => {
      const districtId = event.target.value;
      setSelectedDistrict(districtId);
   };
   useEffect(() => {
      fetchData();
      fetchProvinces();
      setIsLoading(false);
   }, []);

   if (isLoading) {
      return <Skeleton active={true} />;
   }

   return (
      <div className=''>
         <Grid container spacing={4}>
            <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll mt-[32px]'>
               <div className='p-5 py-7 border-b cursor-pointer'>
                  {
                     addressList.map((item) => (
                        <div className='mb-4'>
                           <AdressCard address={item} handleAddress={navigateWithAddress} />
                        </div>
                     ))
                  }
               </div>
            </Grid>
            <Grid item xs={12} lg={7}>
               <Box className="border rounded-s-md shadow-md p-5">
                  <form onSubmit={handleSubmit}>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='firstName' name='Tên' label='First Name' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='lastName' name='Họ và tên đệm' label='Last Name' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField required id='address' name='Địa chỉ' label='Address' fullWidth autoComplete='given-name' multiline rows={6} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              select
                              label="Tỉnh/Thành phố"
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
                              label="Quận/huyện"
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
                           <TextField id='zipCode' name='zipCode' label='Mã bưu điện' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='mobile' name='mobile' label='Số điện thoại' fullWidth autoComplete='' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Button className='w-full' sx={{ mt: 2, bgcolor: "#2ebb77", py: 2, borderRadius:"12px" }} size='large' variant='contained' type='submit'>Giao hàng tại địa chỉ này</Button>
                        </Grid>
                     </Grid>
                  </form>
               </Box>
            </Grid>
         </Grid>
      </div>
   )
}

export default DeliveryAddressForm