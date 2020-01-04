import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import { compose, withProps } from 'recompose'

export const GoogleMaps = compose(
  withProps(({ containerStyles }) => {
    return {
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAI-MeBquqFKIfR8fVMq52ib7lZA4DW3Ns&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ ...containerStyles }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }
  }),
  withScriptjs,
  withGoogleMap,
)(({ clickable, markers = [], onMapClick }) => {
  return (
    <GoogleMap
      onClick={onMapClick}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {markers &&
        markers.map(
          markerInfo =>
            markerInfo && (
              <Marker
                key={`${markerInfo.lat}-${markerInfo.lng}`}
                position={{
                  lat: markerInfo.lat,
                  lng: markerInfo.lng,
                }}></Marker>
            ),
        )}
    </GoogleMap>
  )
})
