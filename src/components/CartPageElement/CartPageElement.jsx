import React, {useState, useEffect} from 'react';
import axios from 'axios';
import deleter from '../../assets/icons/delete.png'
import './cartPageElement.scss'
const CartPageElement = ({element}) => {
   const deleteItem = (id) => {
         axios.delete("http://localhost:3005/cart" + id)   
         window.location.reload();
   }
   const [count, setCount] = useState(element.count)
   let elementCounter = element.count
   const plusCount = (id) => {
      elementCounter+=1
      setCount(prev => prev + 1)
      axios.patch("http://localhost:3005/cart/" + id, {
         count: elementCounter,
       })
       window.location.reload();
   }
   const minusCount = (id) => {
      elementCounter-=1
      setCount(prev => prev - 1)
      axios.patch("http://localhost:3005/cart/" + id, {
         count: elementCounter,
       })
       window.location.reload();
   }
   return (
      <div className="cartPage__entrails__element">
         <div className="cartPage__entrails__element__img">
            <img src={element.url} alt="" />
         </div>
         <div className="cartPage__entrails__element__name">{element.name}</div>
         <div className="color">
            <div style={{"background": element.color}} className='clothesCatogoriesItem__color'></div>
         </div>
         <div className="cartPage__entrails__element__size">
            <select defaultValue={element.size} name="" id="">
               {
                  element.sizes.map((size, i) => {
                     return <option  key={i} value={size}>{size}</option>
                  })
               }
            </select>
         </div>
         <div className="cartPage__entrails__element__count">
            <div className="cartPage__entrails__element__count__body">
               <span onClick={()=>minusCount(element.id)} className="minus">-</span>
               {count}
               <span onClick={()=>plusCount(element.id)} className="plus">+</span>
            </div>
         </div>
         <div className="cartPage__entrails__element__price">{element.price} грн</div>
         <div onClick={()=>deleteItem(element.id)} className="cartPage__entrails__element__delete">
            <img src={deleter} alt="" />
         </div>
        
      </div>
   );
};

export default CartPageElement;