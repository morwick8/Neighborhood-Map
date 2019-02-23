import React, { Component } from 'react';
import PropTypes from 'prop-types'
var jsonData = require('./data/growers.json');



class GetMarker extends React.Component {

state = {
	growers: {}
}
	
render() {
	return (
//	var data;

	this.loadJSON()
)}
}

	function loadJSON(jsongrowers, callback) {
		var jsonObj = new XMLHttpRequest();
		jsonObj.open('GET', "./data/growers.json", true);
		jsonObj.onload = () => {
			if (jsonObj.status === 200) {
				const json = JSON.parse(jsonObj.responseText);
				this.setState({growers:json}) ;
				callback(null, this.state.growers);
			} else {
				const error = ('Request failed. Returned status of {jsonObj.status}');
				callback(error, null);
			}
		}
	}


		



export default GetMarker
		