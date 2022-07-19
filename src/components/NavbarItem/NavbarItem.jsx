import React from 'react';
import './navabrItem.scss'
const NavbarItem = ({link}) => {
   return (
      <li className='navbar__item'> 
         {link.name}
      </li>
   );
};

export default NavbarItem;