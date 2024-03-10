import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';

const HomeSectionCarousel = ({data, sectionName}) => {
   const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 5 },
   };


   const items = data.map((item, i) => <HomeSectionCard key={i} product={item} />)
   return (
      <div className='border'>
         <h2 className='text-2xl font-bold text-gray-800 py-5'>{sectionName}</h2>
         <div className='relative' style={{ paddingLeft: "5rem", paddingRight: "1.5rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
            <AliceCarousel
               items={items}
               responsive={responsive}
               disableButtonsControls
               autoPlay
               autoPlayInterval={2500}
               infinite
            />
         </div>
      </div>
   )
}

export default HomeSectionCarousel