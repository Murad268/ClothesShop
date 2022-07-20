import React from 'react';
import { useClothes } from '../../Context/ContextClothes';
import './categoriFilterItem.scss'
const CategoriFilterItem = ({state}) => {
const {clickFilter} = useClothes()
   return (
      <li onClick={() => clickFilter(state.link)} className='categoriFilterItem'>
         {state.name}
      </li>
   );
};

export default CategoriFilterItem;