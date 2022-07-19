import { createContext, useContext } from "react";

import { useQuery } from '@tanstack/react-query';
import { ClothesService } from '../services/Services';
import { useState, useEffect } from "react";
 const ContextClothes = createContext()



 const ContextClothesProvider = ({children}) => {
   const [states, useStates] = useState([
      {id: 1, name: "Верхняя одежда", url: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 2, name: "Шубы", url: "https://images.pexels.com/photos/11131486/pexels-photo-11131486.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 3, name: "Тренчи", url: "https://images.pexels.com/photos/4456729/pexels-photo-4456729.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 4, name: "Пуховики и жилеты", url: "https://images.pexels.com/photos/9178852/pexels-photo-9178852.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 5, name: "Костюмы", url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 6, name: "Жакеты", url: "https://images.pexels.com/photos/5916468/pexels-photo-5916468.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 7, name: "Платья", url: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 8, name: "Рубашки и блузы", url: "https://images.pexels.com/photos/6069563/pexels-photo-6069563.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
      {id: 9, name: "Юбки", url: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=400", link:""},
      {id: 10, name: "Футболки и топы", url: "https://images.pexels.com/photos/12700054/pexels-photo-12700054.jpeg?auto=compress&cs=tinysrgb&w=400", link: ""},
   ])
   const {isLoading, data, error} = useQuery(["clothes list"], () =>{
      return ClothesService.getAllData()
   });

   const values = {
      data,
      states
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