import React from 'react';
import { useClothes } from '../../Context/ContextClothes';
import './navabrItem.scss'
import { Link } from 'react-router-dom';
const NavbarItem = ({link}) => {
   const {toCat} = useClothes()
   return (
      <li onClick={toCat} className='navbar__item'> 
         <Link className='navbar__item__link' to ={"/" + link.url}>{link.name}</Link>  
      </li>
   );
};

export default NavbarItem;