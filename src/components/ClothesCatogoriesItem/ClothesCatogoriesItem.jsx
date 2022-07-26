import React from 'react';
import { Link } from 'react-router-dom';
import './clothesCatogoriesItem.scss'
const ClothesCatogoriesItem = ({data}) => {
  
   return (
      <Link to={`./${data.id}`} style={{"background": `url(${data.url}) center center/cover no-repeat`}} className='clothesCatogoriesItem'>
         <div className="clothesCatogoriesItem__footer">
            <div className="clothesCatogoriesItem__name">{data.name.toLowerCase()}</div>
            <div className="clothesCatogoriesItem__price">{data.price} грн</div>
            <div className="clothesCatogoriesItem__sizes">
               {
                  data.sizes.map((size, i) => {
                     return <span className='sizesNmae' key={i}>{size}</span>
                  })
               }
            </div>
            <div className="clothesCatogoriesItem__colors">
               {
                  data.colors.map((color, i) => {
                     return <div style={{"background": color}} key={i} className='clothesCatogoriesItem__color'></div>
                  })
               }
            </div>
         </div>
      </Link>
   );
};

export default ClothesCatogoriesItem;

