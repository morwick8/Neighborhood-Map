import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Img from './Img'


class MakeInfoWindow extends Component {

   constructor(props) {
        super(props);
      }




render() {


	return (
		<div className="infoWindow">
			<Img id={props.id}/>
			<h2>{props.name}</h2>
			<h3>{props.neighborhood}</h3>
			<h3>{props.address}</h3>
		</div>


)

}
}

export default MakeInfoWindow
		