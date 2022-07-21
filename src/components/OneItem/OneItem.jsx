import React, {useState} from 'react';
import { ClothesService } from '../../services/Services';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import CarouselPreview from '../CarouselPreview/CarouselPreview';
import MainCarouselItem from '../MainCarouselItem/MainCarouselItem';
import { useClothes } from '../../Context/ContextClothes';
import MainMenuCategoriesItem from '../MainMenuCategoriesItem/MainMenuCategoriesItem';
import './oneItem.scss'
const OneItem = () => {
   const {forClothes} = useParams()
   const {data:response}= useClothes()
   const {isLoading, data, error} = useQuery(["one clothes list"], () =>{
      return ClothesService.getAllData(`all/${forClothes}`)
   });
   const [offset, setOffset] = useState(0)
   const startSlide = (id) => {
      const width = document.querySelector(".oneItem__carousel__main").clientWidth;
      setOffset(width*id)
   }
   let length = 0

   return (
      <div className='oneItem'>
         <div className="container">
         <div className="clothesCatogories__location"><span style={{"marginRight": "11px"}}>Главная</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>Каталог</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>{data?.data.typeName}</span><span style={{"marginRight": "11px"}}>{">"}</span><span>{data?.data.name}</span></div>
            <div className="oneItem__wrapper">
               <div className="oneItem__carousel">
                  <div className="oneItem__carousel__preview">
                     {
                        data?.data.images.map(image => {
                           return <CarouselPreview startSlide={startSlide} key={image.id} image={image}/>
                        })
                     }
                  </div>
                  <div className="oneItem__carousel__main">
                     <div style={{"transform": `translateX(-${offset}px)`}} className="oneItem__carousel__main__inner">
                     {
                        data?.data.images.map(image => {
                           return <MainCarouselItem key={image.id} image={image}/>
                        })
                     }
                     </div>
                  </div>
               </div>
               <div className="oneItem__desc">
                     <div className="oneItem__desc__name">{data?.data.name}</div>
                     <div className="oneItem__desc__price">{data?.data.price} грн</div>
                     <div className="oneItem__desc__colors">
                           {
                              data?.data.colors.map((color, i) => {
                                 return <div style={{"background": color, "cursor":"pointer"}} key={i} className='clothesCatogoriesItem__color'></div>
                              })
                           }
                     </div>
                     <div className="oneItem__desc__colors__name">Цвет: Кофе с молоком меланж</div>
                     <div className="oneItem__desc__sizes">
                        <select name="" id="">
                           {
                              data?.data.sizes.map((size, i) => {
                                 return <option key={i} value="">{size}</option>
                              })
                           }
                        </select>
                     </div>
                     <div className="oneItem__desc__btns">
                        <button className='addCart'>В КОРЗИНУ</button>
                        <button className='addFavorites'>♡ В ИЗБРАННОЕ</button>
                     </div>
                     <div className="oneItem__desc__footer">
                        <div className="oneItem__desc__footer__title">Подробности</div>
                        <p>{data?.data.desc}</p>
                     </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OneItem;

