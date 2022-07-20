import React, {useState, useEffect} from 'react';
import { useClothes } from '../../Context/ContextClothes';
import CategoriFilterItem from '../CategoriFilterItem/CategoriFilterItem';
import ClothesCatogoriesItem from '../ClothesCatogoriesItem/ClothesCatogoriesItem';

import './clothesCatogories.scss'
const ClothesCatogories = () => {

   const {
      states, 
      colors, 
      sizes, 
      data, 
      filteredItems, 
      filterOptions, 
      filterForOptions, 
      filterFor, 
      clickFilterFor, 
      filterColor, 
      filterColorOption, 
      changeFilterColor, 
      filterSizeOption, 
      filterSizes, 
      changeSize,
      filterPriceOption,
      filterPrice,
      changePriceFilter} = useClothes()
   
 
  
   return (
      <div className='clothesCatogories'>
         <div className="container">
            <div className="clothesCatogories__location"><span style={{"marginRight": "11px"}}>Главная</span><span style={{"marginRight": "11px"}}>{">"}</span><span style={{"marginRight": "11px"}}>Каталог</span><span style={{"marginRight": "11px"}}>{">"}</span><span>{filterOptions}</span></div>
            <div className="clothesCatogories__wrapper">
               <div className="clothesCatogories__filters">
                  <h4 className="clothesCatogories__filters__title">Каталог</h4>
                  <ul>
                     {
                        states.map(state => {
                           return <CategoriFilterItem key={state.id} state={state}/>
                        })
                     }
                  </ul>
               </div>
               <div className="clothesCatogories__items">
                  <div className="clothesCatogories__items__filter">
                     <select onChange={(e) => changeSize(e.target.value)} name="" id="">
                        <option defaultChecked disabled >Размер</option>
                        {
                           sizes.map(size => {
                              return <option  value={size.name} key={size.id}>{size.name}</option>
                           })
                        }
                     </select>
                     <select  onChange={(e) => changeFilterColor(e.target.value)} name="" id="">
                        <option  defaultChecked disabled value="">Цвет</option>
                        {
                           colors.map(color => {
                              return <option value= {color.name} key={color.id}>{color.name}</option>
                           })
                        }
                     </select>
                     <input onChange={(e) => changePriceFilter(e.target.value)} defaultValue={0} step={100} max={30000} min={0} type="range" name="" id="" />
                     <button onClick={() => clickFilterFor("all")} className="btn btn-dark">Все</button>
                     <button onClick={() => clickFilterFor("men")} className="btn men btn-success">Для мужчин</button>
                     <button onClick={() => clickFilterFor("women")} className="btn woman btn-danger">Для женщин</button>
                     <button onClick={() => clickFilterFor("children")} className="btn children btn-warning">Для детей</button>
                  </div>
                  <div className="clothesCatogories__items__own">
                       {data?filterPrice(filterPriceOption ,filterSizes(filterSizeOption ,filterColor(filterColorOption, filterFor(filterForOptions,filteredItems(filterOptions, data.data))))).map(data => {
                        return <ClothesCatogoriesItem key = {data.id} data={data}/>
                       }):null}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClothesCatogories;