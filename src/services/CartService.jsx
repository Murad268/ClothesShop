import axios from "axios";

export const CartService =  {
   async getCart () {
      return axios.get("http://localhost:3005/cart")
   }
}