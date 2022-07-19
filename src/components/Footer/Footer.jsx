import React from 'react';
import telegram from '../../assets/icons/Frame.png'
import instagram from '../../assets/icons/Frame (1).png'
import './footer.scss'
const Footer = () => {
   return (
      <div className='footer'>
         <div className="container">
            <div className="footer__wrapper">
               <div className="company">
                  <h4 className="footer__title">КОМПАНИЯ</h4>
                  <ul className='footer__list'>
                     <li><a href="">О нас</a></li>
                     <li><a href="">Контакты</a></li>
                  </ul>
               </div>
               <div className="useful">
                  <h4 className="footer__title">ПОЛЕЗНОЕ</h4>
                  <ul className='footer__list'>
                     <li><a href="">Оплата и доставка</a></li>
                     <li><a href="">Условия возврата</a></li>
                     <li><a href="">Бонусная система</a></li>
                  </ul>
               </div>
               <div className="toTheBuyer">
                  <h4 className="footer__title">ПОКУПАТЕЛЮ</h4>
                  <ul className='footer__list'>
                     <li><a href="">Избранное</a></li>
                     <li><a href="">Публичная оферта</a></li>
                     <li><a href="">Политика конфиденциальности</a></li>
                  </ul>
               </div>
               <div className="contacts">
                  <h4 className="footer__title">КОНТАКТЫ</h4>
                  <ul className='footer__list'>
                     <li><a href="">
                        <img src={instagram} alt="" />   
                        <img src={telegram} alt="" />   
                     </a></li>
                     <li><a href="">+38(073) 096 36 44</a></li>
                     <li><a href="">info@yanki.com</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;