import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AdressCard from '../adressCard/AdressCard'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../state/order/Action';
import { useNavigate } from 'react-router-dom';

function DeliveryAddressForm() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
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
      const orderData = {address, navigate};
      dispatch(createOrder(orderData));
      console.log(address);
   }
   return (
      <div>
         <Grid container spacing={4}>
            <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
               <div className='p-5 py-7 border-b cursor-pointer'>
                  <AdressCard />
                  <Button sx={{ mt: 2, bgcolor: "#9155fd" }} size='large' variant='contained'>Delevery Here</Button>
               </div>
            </Grid>
            <Grid item xs={12} lg={7}>
               <Box className="border rounded-s-md shadow-md p-5">
                  <form onSubmit={handleSubmit}>
                     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='firstName' name='firstName' label='First Name' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='lastName' name='lastName' label='Last Name' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField required id='address' name='address' label='Address' fullWidth autoComplete='given-name' multiline rows={6} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='city' name='city' label='City' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='state' name='state' label='State/Province/Region' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField id='zipCode' name='zipCode' label='Zip/Postal Code' fullWidth autoComplete='given-name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField required id='mobile' name='mobile' label='Phone Number' fullWidth autoComplete='' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <Button className='w-full' sx={{ mt: 2, bgcolor: "#9155fd", py:2 }} size='large' variant='contained' type='submit'>Delevery Here</Button>
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