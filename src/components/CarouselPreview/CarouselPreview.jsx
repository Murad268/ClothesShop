import React from 'react';
import './carouselPreview.scss'
const CarouselPreview = ({image, startSlide, index}) => {
   
   return (
      <div onClick={() => startSlide(index)} style={{"background": `url(${image.url}) center center/cover no-repeat`}} className='carouselPreview__Item'>
         
      </div>
   );
};

export default CarouselPreview;