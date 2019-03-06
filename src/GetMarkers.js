import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Map, Marker, InfoWindow} from 'google-maps-react'
import Img from './Img'


 
   var highlightedIcon = {
        url:  'http://maps.google.com/mapfiles/ms/icons/green-dot.png'};

    var defaultIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    };
 

class GetMarkers extends React.Component {

 static propTypes = {
        places: PropTypes.array.isRequired,
        imgs: PropTypes.array.isRequired
        
}

state = {
showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}  
}

onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

render() {
   
  
 
  const places = this.props.places
  const imgs = this.props.imgs
 
  var Markers = ({places}) => {
    return places.map((place, i) => {
      let lat = parseFloat(place.latitude, 10);
      let lng = parseFloat(place.longitude, 10);

      <Marker
        onClick={this.onMarkerClick}
        title={'Grower'}
        id={place.id}
        name={place.name}
        position={{ lat: lat, lng: lng }}
        animation={window.google.maps.Animation.DROP}
        icon={{defaultIcon}}>
  
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
         <div className="infoWindow">
            <Img img={imgs[place.index]}/>
            <h2>{place.name}</h2>
            <h3>{place.neighborhood}</h3>
            <h3>{place.address}</h3>
          </div>
        </InfoWindow>
      </Marker>
    })
  }

return (Markers)
}




}

export default GetMarkers
    

