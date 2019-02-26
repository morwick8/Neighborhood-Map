
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MakeInfoWindow from './MakeInfoWindow'
import ReactDOMServer from 'react-dom/server'

class MakeMarker extends React.Component {

static propTypes = {
            grower: PropTypes.object.isRequired,
            img: PropTypes.object.isRequired,
            name: PropTypes.string.isRequired,
            neighborhood:PropTypes.string.isRequired
            
            
        }

 componentDidMount() {
    var  grower = this.props.grower
  var img = this.props.img
  var highlightedIcon = {
        url:  'http://maps.google.com/mapfiles/ms/icons/green-dot.png'};

    var defaultIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    };

    
 
       var marker = new window.google.maps.Marker({
    position: {lat: 40.33483, lng: -104.8534},
    animation: window.google.maps.Animation.DROP,
    title: 'Spierman'
   });

       var infowindow = new window.google.maps.InfoWindow ({
        
       });

       let contentString = ReactDOMServer.renderToString(
        <MakeInfoWindow
          name={grower.name}
          neighborhood={grower.neighborhood}
          address={grower.address}
          img={img}
        />)

       marker.addListener('mouseover', function() {
           this.setIcon(highlightedIcon);
         });
         marker.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
        });

      marker.addListener('click', function() {
        infowindow.setContent(contentString)
        infowindow.open(map, this)
     });
}

render() {


return (
 <div>
 </div>
 
   )
}
}

export default MakeMarker
