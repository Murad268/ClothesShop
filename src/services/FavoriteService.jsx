import axios from "axios";

export const favoritetService =  {
   async favoritesService () {
      return axios.get("http://localhost:3007/favorites")
   }
}