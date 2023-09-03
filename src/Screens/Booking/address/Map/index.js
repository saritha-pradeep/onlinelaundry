import React from "react";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "../../../../Config/config";
import "./styles.css";
import { useSelector } from "react-redux";
const containerStyle = {
  width: "100%",
  height: "350px",
};

function MapComponent({ onShopChange = () => {} }) {
  const state = useSelector((state) => state);
  const shopList = state.bookingReducer.shopList;
  console.log("map component", shopList);
  const defaultCenter = {
    lat: 51.5159, // Latitude of the desired location
    lng: 0.0634, // Longitude of the desired location
  };
  const [map, setMap] = React.useState(null);
  const [autocomplete, setAutocomplete] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onLoadSearchBox = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const onPlaceChanged = (e) => {
    if (map) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
      }
    }
  };

  if (isLoaded)
    return (
      <div>
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoadSearchBox}>
          <input
            type="text"
            placeholder="Search your postcode or place"
            className="map-searchplace-style"
          />
        </Autocomplete>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {shopList.map((item, index) => {
            return (
              <MarkerF
                key={index}
                position={item.location}
                onClick={() => onShopChange(item)}
                label={{text:item.name,fontWeight:'bold'}}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  else return null;
}

export default React.memo(MapComponent);
