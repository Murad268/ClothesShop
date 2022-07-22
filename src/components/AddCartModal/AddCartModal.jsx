import React from 'react';
import { useClothes } from '../../Context/ContextClothes';
import './addCartModal.scss'
import './addCartModal.scss'
import exit from '../../assets/icons/modalexit.png'
const AddCartModal = () => {
   const {addCartActive, setAddCartActive} = useClothes()
   const className = !addCartActive?"addCartModal":"addCartModal addCartModal__active"
   return (
      <div className={className}>
         <div className="addCartModal__box">
            <div onClick={() => setAddCartActive(false)} className="addCartModal__exit">
               <img src={exit} alt="" />
            </div>
            <div className="addCartModal__box__title">Добавление в корзину - успешно!</div>
            <div className="addCartModal__box__desc">Вы успешно добавили товар в корзину! В корзину можете управлять количеством товара Приятных покупок!</div>
         </div>
      </div>
   );
};

export default AddCartModal;