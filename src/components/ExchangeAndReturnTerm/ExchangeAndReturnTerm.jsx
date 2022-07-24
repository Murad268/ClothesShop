import React from 'react';
import './exchangeAndReturnTerm.scss';
import termImage from '../../assets/icons/term.png'
import time from '../../assets/icons/time.png'
import delivery from '../../assets/icons/delivery.png'
import blank from '../../assets/icons/blank.png'
import bank from '../../assets/icons/bank.png'
import returns from '../../assets/icons/return.png'
const ExchangeAndReturnTerm = ({term}) => {
   const imageArray = [termImage, time, delivery, blank, bank, returns]
   return (
      <div className='exchangeandreturnterm'>
         <div className="exchangeandreturnterm__image">
            <img src={imageArray[term.id]} alt="" />
         </div>
         <div className="exchangeandreturnterm__desc">
            {term.desc}
         </div>
      </div>
   );
};

export default ExchangeAndReturnTerm;