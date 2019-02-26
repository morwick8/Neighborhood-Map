import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Img from './Img'


class MakeInfoWindow extends React.Component {

 static propTypes = {
        name: PropTypes.string.isRequired,
        neighborhood: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,

        img: PropTypes.object.isRequired

      }




render() {
		const img  = this.props.img


	return (
		<div className="infoWindow">
			<Img img={img}/>
			<h2>{this.props.name}</h2>
			<h3>{this.props.neighborhood}</h3>
			<h3>{this.props.address}</h3>
		</div>


)

}
}

export default MakeInfoWindow
		