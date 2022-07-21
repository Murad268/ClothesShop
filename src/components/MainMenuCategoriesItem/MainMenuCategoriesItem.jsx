import React from 'react';
import './mainMenuCategoriesItem.scss'
import { Link } from 'react-router-dom';
const MainMenuCategoriesItem = ({state}) => {
   return (
      <Link to={`/${state.name==="Посмотреть всё"?"Все":state.name}`} style={{"background": `url(${state.url}) center center/cover no-repeat`}} className='mainMenuCategoriesItem'>
         <div className="mainMenuCategoriesItem__type">
            {state.name}
         </div>
      </Link>
   );
};

export default MainMenuCategoriesItem;