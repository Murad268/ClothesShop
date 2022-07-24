import React from 'react';
import { useClothes } from '../../Context/ContextClothes';
import ExchangeAndReturnTerm from '../ExchangeAndReturnTerm/ExchangeAndReturnTerm';
import './exchangeAndReturn.scss'
const ExchangeAndReturn = () => {
   const {terms} = useClothes()
   return (
      <div className='exchangeandreturnpage'>
         <div className="container">
            <div className="clothesCatogories__location"><span style={{"marginRight": "11px"}}>Главная</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>Обмен и воврат</span></div>
            <div className="exchangeandreturnpage__title">Обмен и возврат</div>
            <div className="exchangeandreturnpage__desc">
              Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат
            </div>
            <div className="exchangeandreturnpage__termTitle">Обмен и возврат возможен в случае :</div>
            <div className="exchangeandreturnpage__wrapper">
               {
                  terms.map(term => {
                     return <ExchangeAndReturnTerm key={term.id} term ={term}/>
                  })
               }
            </div>
         </div>
      </div>
   );
};

export default ExchangeAndReturn;