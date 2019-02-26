import React, { Component } from 'react';
import './App.css';
import request from 'request';
import axios from 'axios';
import * as growers from './data/growers.json';
//import GetMarker from './GetMarker'
import Header from './Header.js';
import MakeInfoWindow from './MakeInfoWindow';
import ReactDOMServer from 'react-dom/server'
import PostPic from './PostPic'
import ImgList from './ImgList'
import GetMarkers from './GetMarkers'
import { Map, GoogleApiWrapper } from 'google-maps-react';

  const mapStyles = {
  width: '100%',
  height: '50%'
};



class MapContainer extends React.Component {



    
    constructor(props) {
        super(props);
            this.state = {
                imgs: [],
                growers: [],
                loadingGrowers: 'initial',
                loadingImgs: 'initial',
                error: null,
                lat: ''
            }    
    }

    componentDidMount() {
        this.setState({loadingImgs: true});
         this.getImgs();
         this.setState({loadingGrowers: true})
        this.getGrowers();

}

getImgs() {
    axios
      .get(
        `https://api.unsplash.com/collections/4297159/photos?page=1&per_page=29&client_id=4fc5dec670dc9f6f8fa81b1c5abfe37c988fab2a510da8183f940463d8482203`
      )
      .then(data => {
        this.setState({ imgs: data.data, loadingImgs: false });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
     
 }

 getGrowers() {
   axios.get('./data/growers.json') // JSON File Path
   .then( response => {
     this.setState({
     growers: response.data, loadingGrowers: false
   });
 })
 .catch(function (error) {
   console.log(error);
 });
}




 

render() {
   if (this.state.loadingImgs === 'initial' && this.state.loadingGrowers === 'initial') {
      return <h2>Initializing...</h2>
    }


    if (this.state.loadingImgs === 'true' || this.state.loadingGrowers === 'true') {
      console.log('Loading');
      return <h2>Loading...</h2>
    }

  return (
    <main>
    <div className="container" role="main">
        <Header/>
        <div id="map">
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 40.33483,
         lng: -104.8534
        }}>
        <GetMarkers
          google={this.props.google}
          map={this.props.map}
          growers={this.props.growers}
          imgs={this.props.imgs}
        />
      </Map> 
    </div>
     </div>
    </main>
  )
}
}





export default GoogleApiWrapper({
  apiKey: 'AIzaSyAx9qqXmxIZck6A-W_InVovJFhL5Eg7xRo&callback=initMap'
})(MapContainer);
    
