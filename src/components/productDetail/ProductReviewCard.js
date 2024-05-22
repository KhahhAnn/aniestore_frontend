import { Avatar, Box, Grid, Rating } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductReviewCard = ({ productId }) => {
   const [reviews, setReviews] = useState([]);


   const featchData = async (productId) => {
      try {
         const response = await axios.get(`http://localhost:8080/api/reviews/product/${productId}`, {
         });
         setReviews(response.data);
      } catch (error) {
         console.error('Error fetching reviews:', error);
      }
   }
   useEffect(() => {
      featchData(productId);
   }, [productId])
   return (
      reviews.map((review) =>
         <div>
            <Grid container spacing={2} gap={3}>
               <Grid item xs={1}>
                  <Box>
                     <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
                        {review?.user?.lastName}
                     </Avatar>
                  </Box>
               </Grid>
               <Grid item xs={9}>
                  <div className='space-y-2'>
                     <div>
                        <p className='font-semibold'>{review?.user?.firstName + review?.user?.lastName}</p>
                        <p className='opacity-70'>Mar 11, 2024</p>
                     </div>
                  </div>
                  <Rating value={review?.starsNumber} name='half-rating' readOnly precision={0.5} />
                  <p>{review?.review}</p>
               </Grid>
            </Grid>
         </div>
      )
   )
}

export default ProductReviewCard