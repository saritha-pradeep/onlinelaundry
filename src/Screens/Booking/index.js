// import React from 'react'
// import { GoogleMap, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';

import Section1 from "./Section1"
import Address from "./address"

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyBMrwnte0uiVSPLfwcRMIyo-lV2oKQaWlA"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <>
//   <StandaloneSearchBox >
//     <input/>
//     </StandaloneSearchBox></>
// }

// export default React.memo(MyComponent)

function Booking(params) {
    return(<div>
        <Address/>
    </div>)
}
export default Booking