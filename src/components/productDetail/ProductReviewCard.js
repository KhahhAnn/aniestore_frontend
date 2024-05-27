import { Avatar, Box, Grid, Rating } from '@mui/material';
import { Input, message, Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Flex, Rate } from 'antd';
import { api } from '../../config/ApiConfig';

const { TextArea } = Input;

const ProductReviewCard = ({ productId }) => {
   const [reviews, setReviews] = useState([]);
   const { auth } = useSelector(store => store);
   const [value, setValue] = useState(2);
   const [reviewText, setReviewText] = useState('');
   console.log(auth);

   const customIcons = [
      <span style={{ fontSize: '24px' }}>😞</span>,
      <span style={{ fontSize: '24px' }}>😐</span>,
      <span style={{ fontSize: '24px' }}>😊</span>,
      <span style={{ fontSize: '24px' }}>😁</span>,
      <span style={{ fontSize: '24px' }}>😍</span>,
   ];

   const fetchData = async (productId) => {
      try {
         const response = await axios.get(`http://localhost:8080/api/reviews/product/${productId}`);
         setReviews(response.data);
      } catch (error) {
         console.error('Error fetching reviews:', error);
      }
   };

   useEffect(() => {
      fetchData(productId);
   }, [productId]);

   const handleSubmit = async () => {
      try {
         await api.post(
            `http://localhost:8080/api/reviews/create`,
            { review: reviewText, productId, start: value },
         );
         message.success('Review added successfully');
         window.location.reload();
      } catch (error) {
         console.error('Error submitting review:', error);
         message.error('Failed to add review');
      }
   };
   

   return (
      <div>
         {reviews.map((review) => (
            <div key={review.id}>
               <Grid container spacing={1} gap={1}>
                  <Grid item xs={1}>
                     <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
                           {
                              review?.user?.imageSrc == null ? review?.user.lastName : <img src={review?.user?.imageSrc} alt=''/>
                           }
                        </Avatar>
                     </Box>
                  </Grid>
                  <Grid item xs={9}>
                     <div>
                        <div className='flex gap-5'>
                           <p className='font-semibold'>{review?.user?.firstName} {review?.user?.lastName}</p>
                           <p className='opacity-70'>{new Date(review?.createdAt).toLocaleDateString()}</p>
                        </div>
                     </div>
                     <Rating value={review?.starsNumber} name='half-rating' readOnly precision={0.5} />
                     <p>{review?.review}</p>
                  </Grid>
               </Grid>
            </div>
         ))}
         <div>
            <div className='mb-5'>
               <div className='flex items-center gap-5'>
                  <Avatar className='text-white' aria-haspopup="true">
                     <img className='object-cover' src={auth.user?.imageSrc} alt='User' />
                  </Avatar>
                  <Flex gap="middle" vertical>
                     <Rate
                        defaultValue={3}
                        value={value}
                        onChange={setValue}
                        character={({ index = 0 }) => customIcons[index]}
                        style={{ fontSize: '48px' }}
                     />
                  </Flex>
               </div>
            </div>
            <div className='mb-5'>
               Đánh giá
               <TextArea rows={4} value={reviewText} onChange={e => setReviewText(e.target.value)} />
            </div>
            <div>
               <button type="primary" htmlType="submit" onClick={handleSubmit}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductReviewCard;
