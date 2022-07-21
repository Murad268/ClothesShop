import React, { useState, useEffect } from "react";
import MainMenuCategoriesItem from "../MainMenuCategoriesItem/MainMenuCategoriesItem";
import { useClothes } from '../../Context/ContextClothes';
import './mainMenuCategories.scss'
import arrow from '../../assets/icons/arrowRight.png'
const MainMenuCategories = () => {
   const {states} = useClothes()
   
   const [sliderOptions, setSliderOptions] = useState({
      offset: 0
   })
   
   const changeOffset = () => {
      if(sliderOptions.offset >= ((270 * states.length) + (15*states.length - 1))) {
         setSliderOptions(prev => ({...prev, offset: 0}))
     
      }
         setSliderOptions(prev => ({...prev, offset: prev.offset+285}))
   }
   return (
    <>
     
         <div className="mainMenuCategories">
            <div className="container">
            <h2 className="mainMenuCategories__title">Категории</h2>
               <div style={{"transform": `translateX(-${sliderOptions.offset}px)`}} className="mainMenuCategories__inner">
                  {
                     states.map((state, i) => {
                        return <MainMenuCategoriesItem state={state} key={i}/>
                     })
                  }
               </div>
            </div>
            <div onClick={changeOffset} className="nextSlider"><img src={arrow} alt="" /></div>
         </div>
    
    </>
   );
};

export default MainMenuCategories;
















