import React from 'react';
import './carouselPreview.scss'
const CarouselPreview = ({image, startSlide}) => {
   
   return (
      <div onClick={() => startSlide(image.id)} style={{"background": `url(${image.url}) center center/cover no-repeat`}} className='carouselPreview__Item'>
         
      </div>
   );
};

export default CarouselPreview;