import React from 'react';
import './subscripeForm.scss'
const SubscripeForm = () => {
   return (
      <div className='subscripeForm'>
         <h3 className="subscripeForm__title">Узнайте  первым о новинках</h3>
         <form action="" className="form">
            <input placeholder='Ваш e-mail*' type="text" />
            <button>ПОДПИСАТЬСЯ</button>
         </form>
         <div className="subscripeForm__desc">
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
         </div>
      </div>
   );
};

export default SubscripeForm;