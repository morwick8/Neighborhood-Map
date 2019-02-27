
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from 'react-google-map'
import growers from './growers.json'
import { compose, withProps, withStateHandlers } from 'recompose'
import {Map} from 'google-maps-react'

const MapWithPlaces = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key='AIzaSyAx9qqXmxIZck6A-W_InVovJFhL5Eg7xRo'",
    mapElement: <div style={{ height: "100%" }} />
  }),
  withStateHandlers(
    props => ({
      infoWindows: props.growers.map(grower => {
        return { isOpen: false };
      })
    }),
    {
      onToggleOpen: ({ infoWindows }) => selectedIndex => ({
        infoWindows: infoWindows.map((iw, i) => {
          iw.isOpen = selectedIndex === i;
          return iw;
        })
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{
         lat: 40.33483,
         lng: -104.8534}}>
    {props.growers &&
      props.growers.map((grower, i) => {
        let lat = grower.lat
        let lng = grower.lng

        return (
          <Marker
            id={grower.id}
            key={grower.id}
            position={{ lat: lat, lng: lng }}
            title="Grower"
            onClick={props.onToggleOpen.bind(this, i)}
          >
            {props.infoWindows[i].isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div>{grower.name}</div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

export default MapWithPlaces;