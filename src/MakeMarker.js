
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MakeInfoWindow from './MakeInfoWindow'

class MakeMarker extends React.Component {

static propTypes = {
            growers: PropTypes.object.isRequired,
            imgs: PropTypes.object.isRequired
            
        }
    

render() {

return (
	var growers = props.growers
	var imgs = props.imgs
 var highlightedIcon = {
        url:  'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}

    var defaultIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
       var marker = new window.google.maps.Marker({
    position: {lat: {growers.latlng.lat}, lng: {growers.latlng.lng}},
    map: map,
    animation: window.google.maps.Animation.DROP,
    title: {growers.name}
   });

       var infowindow = new window.google.maps.InfoWindow ({
        
       })

       let contentString = ReactDOMServer.renderToString(
       	<MakeInfoWindow
       		id={growers.id}
       		name={growers.name}
       		neighborhood={growers.neighborhood}
       		address={growers.address}
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

     )
}
}

export default MakeMarker
