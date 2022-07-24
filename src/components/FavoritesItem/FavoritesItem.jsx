import React from 'react';

const FavoritesItem = ({data}) => {
   return (
      <div to={`./${data.id}`} style={{"background": `url(${data.url}) center center/cover no-repeat`}} className='clothesCatogoriesItem'>
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
      </div>
   );
};

export default FavoritesItem;