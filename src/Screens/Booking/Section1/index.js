import React, { useEffect } from 'react'
import GeoCode from 'react-geocode'
import {GOOGLE_MAP_API_KEY} from '../../../Config/config'
import { useDispatch, useSelector } from 'react-redux';
import { alterReducer } from '../reducer';
const Section1 = () => {
  GeoCode.setApiKey(GOOGLE_MAP_API_KEY);
  GeoCode.setLanguage("en");
  GeoCode.setRegion('GB')
  GeoCode.setLocationType('ROOFTOP')
const state=useSelector(state=>state)
const dispatch=useDispatch()
const address=state.bookingReducer.address
const isLoading=state.bookingReducer.isLoading
  const getGeoCode = (e) => {
    let postcode = e.target.value;
    if(String(postcode).length>4){
    dispatch(alterReducer({isLoading:true}))   
    GeoCode.fromAddress(postcode).then(({ results }) => {
      const {lat,lng} = results[0].geometry.location;
      GeoCode.fromLatLng(lat, lng).then(
        response => {
          const address = response.results[0].formatted_address;
          dispatch(alterReducer({address:{address1:address,lat,lng,postcode}}))      
        },
        error => {
          console.error(error);
        }
      );
    }).catch(e=>{})
   } else {
      dispatch(alterReducer({address:{}}))
    }
    };
  return (
    <div>
      <input placeholder='Postcode' onChange={getGeoCode}/>
      {address?.postcode&&<input placeholder='Address' onChange={getGeoCode}/>}
      {address?.address1&&<input placeholder='Address1' onChange={getGeoCode}/>}
    </div>
  )
}

export default Section1