import React, {useEffect} from 'react';
import './mainCarouselItem.scss'
const MainCarouselItem = ({image}) => {
useEffect(() => {
      document.querySelectorAll(".mainCarouselItem").forEach(item => {
       item.style.width =  document.querySelector(".oneItem__carousel__main").clientWidth + 'px'
      })
 }, [])
   return (
      <div style={{"background": `url(${image.url}) center center/cover no-repeat`}} className='mainCarouselItem'>
       
      </div>
   );
};

export default MainCarouselItem;