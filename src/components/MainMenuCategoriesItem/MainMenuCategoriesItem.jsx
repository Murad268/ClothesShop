import React from 'react';
import './mainMenuCategoriesItem.scss'

const MainMenuCategoriesItem = ({state}) => {
   return (
      <div style={{"background": `url(${state.url}) center center/cover no-repeat`}} className='mainMenuCategoriesItem'>
         <div className="mainMenuCategoriesItem__type">
            {state.name}
         </div>
      </div>
   );
};

export default MainMenuCategoriesItem;