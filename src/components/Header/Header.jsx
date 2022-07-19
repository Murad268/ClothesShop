import React from 'react';
import Navbar from '../Navbar/Navbar';

import './header.scss'
import arrow from '../../assets/icons/arrowRight.png'
const Header = () => {
   return (
      <div className='header'>
         <Navbar/>
         <div className="header__body">
            <h1 className="header__title">Новая коллекция</h1>
            <hr className='header__bottom'/>
            <div href="" className="header__link"><a href="">Смотреть Новинки <img src={arrow} alt="" /> </a></div>
         </div>
      </div>
   );
};

export default Header;