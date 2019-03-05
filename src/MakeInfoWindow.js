import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Img from './Img'


class MakeInfoWindow extends React.Component {

 static propTypes = {
        place: PropTypes.object.isRequired,

        img: PropTypes.object.isRequired

      }




render() {
		const img  = this.props.img
		const place = this.props


	return (
		<div className="infoWindow">
			<Img img={img}/>
			<h2>{place.name}</h2>
			<h3>{place.neighborhood}</h3>
			<h3>{place.address}</h3>
		</div>


)

}
}

export default MakeInfoWindow
		
		