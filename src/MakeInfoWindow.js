import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as growers from './GetMarker'


//static propTypes = {
//	grower: PropTypes.object.isRequired,
//  photograph: PropTypes.url.isRequired,
//  name: PropTypes.string.isRequired,
 // neighborhood: PropTypes.string.isRequired,
 // address: PropTypes.string.isRequired

//}





class MakeInfoWindow extends React.Component {

state = { 
	photograph: 'https://unsplash.com/photos/dJHdoIN553o',
	name: 'SpiderMan',
	neighborhood: 'Old Town Milliken',
	address: '411 S. Olive St., Milliken, CO'

}
	
render() {
	return (
		<div className="infoWindow">
			<img src={this.state.photograph} alt="Grower Photograph" width="100" height="100"/>
			<h2>{this.state.name}</h2>
			<h3>{this.state.neighborhood}</h3>
			<h3>{this.state.address}</h3>
		</div>


)

}
}

export default MakeInfoWindow
		