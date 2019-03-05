import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Map, Marker, InfoWindow} from 'google-maps-react'


 
   var highlightedIcon = {
        url:  'http://maps.google.com/mapfiles/ms/icons/green-dot.png'};

    var defaultIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    };
 

class GetMarkers extends React.Component {

 static propTypes = {
        growers: PropTypes.array.isRequired,
        imgs: PropTypes.array.isRequired
        
}

state = {
showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}  
}

renderMarkers() {
   
  
 
  const growers = this.props.growers
  const imgs = this.props.imgs
 
  var Markers = ({growers}) => {
    return growers.map((grower, i) => {
     <Marker
          key={ i }
          title={grower.name}
          label={grower.id}
          neighborhood={grower.neighborhood}
          address={grower.address}
          imgs={imgs[grower.id]}
          key={grower.index}
          position={{ lat: grower.lat, lng: grower.lng }}
          animation={window.google.maps.Animation.DROP}
          icon={{defaultIcon}}>
  
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
       </InfoWindow>
     </Marker>
  })
  }
}


render() {
  return <div><Markers growers={growers}/></div>
}

 



}

export default GetMarkers
    

