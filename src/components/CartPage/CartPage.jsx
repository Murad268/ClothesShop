import React from 'react';
import { CartService } from "../../services/CartService";
import { useQuery } from '@tanstack/react-query';
import CartPageElement from '../CartPageElement/CartPageElement';
import Checkout from '../Checkout/Checkout';
import './cartPage.scss'
const CartPage = () => {
   const {isLoading, data, error} = useQuery(["cart list"], () =>{
      return CartService.getCart()
   });
   const countAllPrice = () => {
      return data?.data.reduce((a,b) => a+b.price, 0)
   }
  
   return (
      <div className='cartPage'>
         <div className="container">
            <div className="clothesCatogories__location"><span style={{"marginRight": "11px"}}>Главная</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>Корзина</span></div>
            <h4 className="cartPage__title">Ваш заказ</h4>
            <div className="cartPage__entrails">
              {
               data?.data.map(element => {
                  return <CartPageElement key={element.id} element={element}/>
               })
              }
            </div>
            <div className="all__price">К оплате: <span>{countAllPrice()} грн</span></div>
            <Checkout/>
         </div>
      </div>
   );
};

export default CartPage;