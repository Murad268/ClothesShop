import React from 'react';
import { useClothes } from '../../Context/ContextClothes';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './header.scss'
import arrow from '../../assets/icons/arrowRight.png'
const Header = () => {
   const {toCat} = useClothes()
   return (
      <div className='header'>
         <Navbar/>
         <div className="header__body">
            <h1 className="header__title">Новая коллекция</h1>
            <hr className='header__bottom'/>
            <div onClick={toCat} className="header__link"><Link to="/categories">Смотреть Новинки <img src={arrow} alt="" /> </Link></div>
            
         </div>
      </div>
   );
};

export default Header;