import React, {useState, useEffect} from 'react';
import { ClothesService } from '../../services/Services';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import CarouselPreview from '../CarouselPreview/CarouselPreview';
import MainCarouselItem from '../MainCarouselItem/MainCarouselItem';
import { useClothes } from '../../Context/ContextClothes';
import MainMenuCategoriesItem from '../MainMenuCategoriesItem/MainMenuCategoriesItem';
import './oneItem.scss'
const OneItem = () => {
   const random = Math.random()
   const {forClothes} = useParams()
   const {isLoading, data, error} = useQuery(["one clothes list"], () =>{
      return ClothesService.getAllData(`all/${forClothes}`)
   });
   const [buyOption, setBuyOption] = useState({
      id: random,
      name: "",
      url: "",
      color: "",
      size: "",
      count: 1,
      price: ""
   })
   useEffect(() => {
      setBuyOption(prev => ({
         ...prev,
         name: data?.data.name,
         url: data?.data.url,
         price: data?.data.price

      }))
   }, [isLoading])

   const setColor = (data) => {
      setBuyOption(prev => ({...prev, color: data}))
   }
   const setSize = (data) => {
      setBuyOption(prev => ({...prev, size: data}))
   }
   const [offset, setOffset] = useState(0)
   const startSlide = (id) => {
      const width = document.querySelector(".oneItem__carousel__main").clientWidth;
      setOffset(width*id)
   }
   const ifDisabled = buyOption.color === ""||buyOption.size == ""?true:false
   const addCart = () => {
     if(ifDisabled) {
      alert("Вы не выбрали цвет или размер")
     } 
   }
   const addFavorites = () => {
      if(ifDisabled) {
         alert("Вы не выбрали цвет или размер")
        } 
   }
   return (
      <div className='oneItem'>
         <div className="container">
         <div className="clothesCatogories__location"><span style={{"marginRight": "11px"}}>Главная</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>Каталог</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>{data?.data.typeName}</span><span style={{"marginRight": "11px"}}>{">"}</span><span>{data?.data.name}</span></div>
            <div className="oneItem__wrapper">
               <div className="oneItem__carousel">
                  <div className="oneItem__carousel__preview">
                     {
                        data?.data.images.map((image, i) => {
                           return <CarouselPreview index ={i} startSlide={startSlide} key={image.id} image={image}/>
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
                                 return <div onClick={(e)=>{
                                    setColor(color)
                                    document.querySelectorAll(".clothesCatogoriesItem__color").forEach(item => {
                                       item.style.border = "none";
                                       item.style.transform = "scale(1)"
                                    })
                                    e.target.style.border = '2px solid white';
                                    e.target.style.transform = "scale(1.4)"
                                 }} style={{"background": color, "cursor":"pointer"}} key={i} className='clothesCatogoriesItem__color'></div>
                              })
                           }
                     </div>
                     <div className="oneItem__desc__colors__name">Цвет: Кофе с молоком меланж</div>
                     <div className="oneItem__desc__sizes">
                        <select onChange={(e) => setSize(e.target.value)} name="" id="">
                           {
                              data?.data.sizes.map((size, i) => {
                                 return <option value = {size} key={i} >{size}</option>
                              })
                           }
                        </select>
                     </div>
                     <div className="oneItem__desc__btns">
                        <button onClick={addCart}  className='addCart'>В КОРЗИНУ</button>
                        <button onClick={addFavorites}  className='addFavorites'>♡ В ИЗБРАННОЕ</button>
                     </div>
                     <div className="oneItem__desc__footer">
                        <div className="oneItem__desc__footer__title">Подробности</div>
                        <p>{data?.data.desc}</p>
                     </div>
               </div>
            </div>
            <div>
            </div>
         </div>
      </div>
   );
};

export default OneItem;

