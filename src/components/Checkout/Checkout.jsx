import React from 'react';
import './checkout.scss'
import {Link} from 'react-router-dom'
import { useClothes } from '../../Context/ContextClothes';
const Checkout = ({countAllPrice}) => {
   const {discount, setDiscount} = useClothes()
   const discountPercent = discount==="135610865577833am"?70:discount==="Murad44444"?50:0
   const priceWithDiscount = () => {
      return countAllPrice() - discountPercent
   }
   return (
      <div className='checkout'>
         <div className="checkout__title">Оформление заказа</div>
         <div className="checkout__data">Персональные данные:</div>
         <form className="checkout__datas__form">
            <div className="checkout__wrapper">
               <div className="checkout__datas">
                     <div className="checkout__datas__inputs">
                        <input placeholder='Ваше имя*' type="text" />
                        <input placeholder='Ваша фамилия*' type="text" />
                        <input placeholder='Ваш e-mail*' type="text" />
                        <input placeholder='Ваш телефон*' type="text" />
                     </div>
                     <div className="checkout__datas__delivery">
                        <div className="checkout__datas__delivery__title">Способ доставки:</div>
                        <div className="checkout__datas__delivery__country">
                           <div className="checkout__datas__delivery__country__urkaine">
                              <div className="checkout__datas__delivery__country__urkaine__title">По Украине:</div>
                              <div className="input-group">
                                 <input type="radio" name="ukraine" id="first" />
                                 <label htmlFor="first">Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</label>
                              </div>
                              <div className="input-group">
                                 <input type="radio" name="ukraine" id="second" />
                                 <label htmlFor="second">Новая Почта</label>
                              </div>
                           </div>
                           <div className="checkout__datas__delivery__country__world">
                              <div className="checkout__datas__delivery__country__world__title">Международная доставка:</div>
                              <div className="input-group">
                                 <input type="radio" name="world" id="firstWorld" />
                                 <label htmlFor="firstWorld">Украпочта / 1-3 недели / 30$</label>
                              </div>
                             <div className="input-group">
                              <input type="radio" name="world" id="secondWorld" />
                              <label htmlFor="secondWorld">DHL / 3-7 дней / 60$</label>
                             </div>
                           </div>
                        </div>
                     </div>
                     <div className="checkout__datas__address">
                        <div className="checkout__datas__address__title">Адрес доставки:</div>
                        <div className="checkout__datas__address__inputs">
                           <input placeholder='Город*' type="text" />
                           <input placeholder='Отделение почты*' type="text" />
                        </div>
                     </div>
                     <div className="checkout__datas__variants">
                        <div className="checkout__datas__variants__title">Вы можете оплатить покупку одним из ниже перечисленных способов:</div>
                        <div className="checkout__datas__variants__inputs">
                           <div className="input-group">
                              <input type="radio" name="variant" id="firstVariant" />
                              <label htmlFor="firstVariant">Полная предоплата через Приват 24</label>
                           </div>
                           <div className="input-group">
                              <input type="radio" name="variant" id="secondVariant" />
                              <label htmlFor="secondVariant">Денежным переводом  Visa/MasterCard</label>
                           </div>
                           <div className="input-group">
                              <input type="radio" name="variant" id="thirdVariant" />
                              <label htmlFor="thirdVariant">Наложенным платежом в отделении Новой Почты</label>                            
                           </div>
                        </div>
                     </div>
                     <div className="checkout__datas__bonus">
                        <div className="checkout__datas__bonus__title">Использование бонусного счёта:</div>
                        <input onChange={e => setDiscount(e.target.value)}  type="text" placeholder='Сумма списания бонусов*'/>
                     </div>
               </div>
               <div className="checkout__info">
                  <ul className="checkout__info__links">
                     <li className="checkout__info__link">
                        <a className='own' href="">Войти в личный кабинет</a>
                     </li>
                     <li className="checkout__info__link">
                        <a href="">УСЛОВИЯ ДОСТАВКИ</a>
                     </li>
                     <li className="checkout__info__link">
                        <Link to={"../exchangeandreturnpage"} href="">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</Link>
                     </li>
                     <li className="checkout__info__link">
                        <a href="">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</a>
                     </li>
                  </ul>
                  <div className="checkout__info__desc">
                     <div>ДОСТАВКА:   <span>   По тарифам перевозчика</span> </div>
                     <div>БОНУСЫ:   <span>    -{countAllPrice()-priceWithDiscount()} грн</span></div>
                     <div>ИТОГО:   <span>   {priceWithDiscount()} грн</span></div>
                  </div>
                  <button className='checkout__info__btn'>ОФОРМИТЬ ЗАКАЗ</button>
                  <div className="checkout__info__mm">
                  Нажимая на кнопку «оплатить заказ», я принимаю условия <a href="">публичной оферты и политики конфиденциальности</a>
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Checkout;