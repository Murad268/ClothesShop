import axios from "axios";
const API_URL = " http://localhost:3004"
axios.defaults.baseURL = API_URL
export const ClothesService =  {
   async getAllData (dataName) {
      return axios.get("/" + dataName)
   }
}


// export const getAllData = async() => {
//    const res = await fetch('https://clothes-c5b10-default-rtdb.firebaseio.com/all.json', {
//       method: "GET"
//    })
//    return await res.json()
// }