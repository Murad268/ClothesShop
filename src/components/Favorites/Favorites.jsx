import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { favoritetService } from '../../services/FavoriteService';
import ClothesCatogoriesItem from '../ClothesCatogoriesItem/ClothesCatogoriesItem';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import './favorites.scss'
const Favorites = () => {
   const {isLoading, data, error} = useQuery(["favorites list"], () =>{
      return favoritetService.favoritesService()
   });
   console.log(data)
   return (
      <div className='favorites'>
         <div className="container">
            <div className="clothesCatogories__location"><span style={{"marginRight": "11px"}}>Главная</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>Избранное</span></div>
            <div className="favorites__title">Избранное</div>
            <div className="favorites__wrapper">
               {
                  data?.data.map(element => {
                     return <FavoritesItem data={element}/>
                  })
               }
            </div>
         </div>
      </div>
   );
};

export default Favorites;