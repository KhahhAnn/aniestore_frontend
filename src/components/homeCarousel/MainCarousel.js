import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
   const items = mainCarouselData.map(
      (item) => <img style={{width: "100%", height: "700px"}} className='cursor-pointer' role='presentation' src={item.image} alt="" />
   )
   return (
      <AliceCarousel
         mouseTracking
         items={items}
         disableButtonsControls
         autoPlay
         autoPlayInterval={2000}
         infinite
      />
   );
}
export default MainCarousel;