import React, {useState} from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import './navbar.scss'
import logo from '../../assets/icons/logo.png'
import arrow from '../../assets/icons/arrowDown.png'
import search from '../../assets/icons/search.png'
import user from '../../assets/icons/icon.png'
import hearth from '../../assets/icons/hearth (1).png'
import basket from '../../assets/icons/basket.png'
const Navbar = () => {
   const [links, setLinks] = useState([
      {id: 1, name: "NEW", url: ""},
      {id: 2, name: "КАТАЛОГ", url: ""},
      {id: 3, name: "О НАС", url: ""}
   ])
   return (
      <nav className='nav'>
         <div className="container">
           <div className="nav__wrapper">
           <div className="nav__left">
               <div className="nav__left__ham">
                  <span className='first'></span>
                  <span className='second'></span>
                  <span className='third'></span>
               </div>
               <ul className='nav__btns'>
                  {
                     links.map(link => {
                        return <NavbarItem key={link.id} link={link}/>
                     })
                  }
               </ul>
            </div>
            <div className="nav__center">
               <img src={logo} alt="" />
            </div>
            <div className="nav__right">
               <div className="nav__languages">
                  <div className="ru">RU <img src={arrow} alt="" /></div>
                  <div className="uah">UAH <img src={arrow} alt="" /></div>
               </div>
               <div className="nav__userPanel">
                  <div className="search"><img src={search} alt="" /></div>
                  <div className="icon"><img src={user} alt="" /></div>
                  <div className="hearth"><img src={hearth} alt="" /></div>
                  <div className="basket"><img src={basket} alt="" /></div>
               </div>
            </div>
           </div>
         </div>
      </nav>
   );
};

export default Navbar;