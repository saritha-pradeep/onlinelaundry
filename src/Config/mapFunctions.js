import { fetchAPI } from "../Network";
import { GOOGLE_MAP_API_KEY } from "./config";
const near_by_place_api='https://maps.googleapis.com/maps/api/geocode/json?address='
async function GetAllNearPlaces({query}) {
  await  fetchAPI({url:`${near_by_place_api}${query}&key=${GOOGLE_MAP_API_KEY}`,method:"GET" ,"Access-Control-Allow-Origin":true})
    .then(res=>{console.log(res);})
    .catch(e=>{})
    
}
export  {GetAllNearPlaces};