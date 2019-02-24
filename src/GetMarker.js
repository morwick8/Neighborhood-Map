import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as growers from './data/growers.json'
import MakeMarker from './MakeMarker'

//var jsonData = require('./data/growers.json');



class GetMarker extends React.Component {

 static propTypes = {}
        growers: PropTypes.Object.isRequired,
        imgs: PropTypes.Object.isRequired
}
 
render() {
  const growers = props.growers
  const imgs = props.imgs
  let growersMarkers = '';
 
  
    growersMarkers = growers.map( obj => {
      return (
        <MakeMarker 
        	key={obj.id} 
        	id={obj.id} 
        	address={obj.address} 
        	name={obj.name}
        	neighborhood={obj.neighborhood}
    			lat={obj.latlng.lat}
    			lng={obj.latlng.lng}
    		/>
 			)
 	})
   
 
   
}


export default GetMarker
		