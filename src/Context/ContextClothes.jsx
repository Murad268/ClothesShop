import { createContext, useContext } from "react";

import { useQuery } from '@tanstack/react-query';
import { ClothesService } from '../services/Services';
import { useState, useEffect } from "react";
 const ContextClothes = createContext()



 const ContextClothesProvider = ({children}) => {
   const [states, useStates] = useState([
      {id: 1, name: "Верхняя одежда", url: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Верхняя одежда"},
      {id: 2, name: "Шубы", url: "https://images.pexels.com/photos/11131486/pexels-photo-11131486.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Шубы"},
      {id: 3, name: "Тренчи", url: "https://images.pexels.com/photos/4456729/pexels-photo-4456729.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Тренчи"},
      {id: 4, name: "Пуховики и жилеты", url: "https://images.pexels.com/photos/9178852/pexels-photo-9178852.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Пуховики и жилеты"},
      {id: 5, name: "Костюмы", url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Костюмы"},
      {id: 6, name: "Жакеты", url: "https://images.pexels.com/photos/5916468/pexels-photo-5916468.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Жакеты"},
      {id: 7, name: "Платья", url: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Платья"},
      {id: 8, name: "Рубашки и блузы", url: "https://images.pexels.com/photos/6069563/pexels-photo-6069563.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Рубашки и блузы"},
      {id: 9, name: "Юбки", url: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400", link:"Юбки"},
      {id: 10, name: "Футболки и топы", url: "https://images.pexels.com/photos/12700054/pexels-photo-12700054.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Футболки и топы"},
      {id: 11, name: "Посмотреть всё", url: "https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=400", link: "Все"},
   ])
   const [colors, setColors] = useState([
      {id: 1, name: "red"},
      {id: 2, name: "blue"},
      {id: 3, name: "black"},
      {id: 4, name: "gray"},
      {id: 5, name: "white"},
      {id: 6, name: "pink"},
      {id: 7, name: "purple"},
      {id: 8, name: "blue"},
      {id: 9, name: "yellow"},
      {id: 10, name: "green"},
      {id: 11, name: "all"},
   ])
   const [sizes, setSizes] = useState([
      {id: 1, name: "XXS"},
      {id: 2, name: "XS"},
      {id: 3, name: "S"},
      {id: 4, name: "M"},
      {id: 5, name: "L"},
      {id: 6, name: "XL"},
      {id: 7, name: "XXL"},
      {id: 8, name: "XXXL"},
      {id: 9, name: "XXXXL"},
      {id: 10, name: "XXXXXL"},
      {id: 11, name: "all"},
   ])
   const {isLoading, data, error} = useQuery(["clothes list"], () =>{
      return ClothesService.getAllData("all")
   });
   const [filterOptions, setFilterOptions] = useState("Все");
   const [filterForOptions, setFilterForOptions] = useState("all");
   const [filterColorOption, setFilterColorOption] = useState("all");
   const [filterSizeOption, setFilterSizeOption] = useState("all");
   const [filterPriceOption, setFilterPriceOption] = useState(0)
   const filteredItems = (filter, items) => {
      switch(filter) {
         case "Все":
            return items
         case "Верхняя одежда":
            return items.filter(item => item.type === "outerwear")
         case "Шубы":
            return items.filter(item => item.type === "furCoats")
         case "Тренчи":
            return items.filter(item => item.type === "trenchCoats")
         case "Пуховики и жилеты":
            return items.filter(item => item.type === "downJacketsAndVests")
         case "Костюмы":
            return items.filter(item => item.type === "suits")
         case "Платья":
            return items.filter(item => item.type === "dresses")
         case "Жакеты":
            return items.filter(item => item.type === "jackets")
         case "Юбки":
            return items.filter(item => item.type === "skirts")
         case "Футболки и топы":
            return items.filter(item => item.type === "tops")
         case "Рубашки и блузы":
            return items.filter(item => item.type === "shirtsAndBlouses")
      }
   }


   const filterFor = (filter, items) => {
      switch(filter) {
         case "all":
            return items
         case "men":
            return items.filter(item => item.for === "men")
         case "women":
            return items.filter(item => item.for === "girl")
         case "children":
            return items.filter(item => item.for === "child")
      }
   }

   const filterSizes = (filter, items) => {
      switch(filter) {
         case "all":
            return items
         case "XXS":
            return items.filter(item => item.sizes.includes("XXS"))
         case "XS":
            return items.filter(item => item.sizes.includes("XS"))
         case "L":
            return items.filter(item => item.sizes.includes("L"))
         case "S":
            return items.filter(item => item.sizes.includes("S"))
         case "M":
            return items.filter(item => item.sizes.includes("M"))
         case "XL":
            return items.filter(item => item.sizes.includes("XL"))
         case "XXL":
            return items.filter(item => item.sizes.includes("XXL"))
         case "XXXL":
            return items.filter(item => item.sizes.includes("XXXL"))
         case "XXXL":
            return items.filter(item => item.sizes.includes("XXXL"))
         case "XXXXL":
            return items.filter(item => item.sizes.includes("XXXXL"))
         case "XXXXXL":
            return items.filter(item => item.sizes.includes("XXXXXL"))
      }
   }
   const filterColor = (filter, items) => {
      switch(filter) {
         case "all":
            return items
         case "red":
            return items.filter(item => item.colors.includes("red"))
         case "blue":
            return items.filter(item => item.colors.includes("blue"))
         case "gray":
            return items.filter(item => item.colors.includes("gray"))
         case "white":
            return items.filter(item => item.colors.includes("white"))
         case "black":
            return items.filter(item => item.colors.includes("black"))
         case "purple":
            return items.filter(item => item.colors.includes("purple"))
         case "yellow":
            return items.filter(item => item.colors.includes("yellow"))
         case "pink":
            return items.filter(item => item.colors.includes("pink"))
         case "green":
            return items.filter(item => item.colors.includes("green"))
      }
   }
   const filterPrice = (filter, items) => {
      return items.filter(item => item.price >= filter)
   }

   const clickFilter = (data) => {
      setFilterOptions(data)
   }
   const clickFilterFor = (data) => {
      setFilterForOptions(data)
   }
   const changeFilterColor = (data) => {
      setFilterColorOption(data)
   }
   const changeSize = (data) => {
      setFilterSizeOption(data)
   }
   const changePriceFilter = (data) => {
      setFilterPriceOption(data)
   } 
   const toCat = () => {
      window.scrollTo(0, document.querySelector(".header").clientHeight);
   }
   const values = {
      data,
      states,
      colors,
      sizes,
      filterOptions,
      filteredItems,
      clickFilter,
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
      changePriceFilter,
      toCat
   };


   return (
      <ContextClothes.Provider value = {values}>
         {children}
      </ContextClothes.Provider>
   )
  
}

  const useClothes = () => {
   const context = useContext(ContextClothes)
   if(context === undefined) {
      throw new Error("Error")
   }
   return context
}


export  {useClothes, ContextClothesProvider, ContextClothes};