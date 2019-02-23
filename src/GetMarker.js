import React, { Component } from 'react';

var jsonData = require('./data/growers.json');

class GetMarker extends React.Component {
	
render() {
	return (
//	var data;

	this.load()
)}

	function loadJSON(jsongrowers, callback) {
		var jsonObj = new XMLHttpRequest();
		jsonObj.open('GET', "./data/growers.json", true);
		jsonObj.onload = () => {
			if (jsonObj.status === 200) {
				const json = JSON.parse(jsonObj.responseText);
				const growers = json.growers;
				callback(null, growers);
			} else {
				const error = ('Request failed. Returned status of {jsonObj.status}');
				callback(error, null);
			}
		}
	}

	function load() {
		this.loadJSON (jsonData, function(reponse) {
			var data = JSON.parse(response);
			console.log(data);
		});
	}
		

}

export default GetMarker
		