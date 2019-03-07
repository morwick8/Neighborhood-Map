import React, { Component } from 'react';
import './App.css';
import request from 'request';
import axios from 'axios';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Header from './Header.js';
import MakeInfoWindow from './MakeInfoWindow';
import ReactDOMServer from 'react-dom/server';
import PostPic from './PostPic';
import ImgList from './ImgList';
import Img from './Img'

  const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
    
  constructor(props) {
    super(props)
      this.state = {
        imgs: [],             
        loadingImgState: true,
        error: null,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},  
        
        }    
    };


    componentDidMount() {
        
        this.getPics()
};

getPics() {
    axios
      .get(
        `https://api.unsplash.com/collections/4297159/photos?page=1&per_page=29&client_id=4fc5dec670dc9f6f8fa81b1c5abfe37c988fab2a510da8183f940463d8482203`)
      .then(data => {
        this.setState({ imgs: data.data, loadingImgState: false });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      })
     
};


 
 onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };



  



render() {
    const google = window.google;
    const data = this.props.data;
    const center = this.props.center;

     if (this.state.loadingImgState === 'true' ) {
      return <h2>Loading...</h2>
    }


  return (
    <div>
    <div className="container" role="main">
     <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={this.props.center}
      > 
      {data.map(item => (
            <Marker
              key={item.id}
              title={item.name}
              name={item.name}
              position={{ lat: item.latitude, lng: item.longitude }}
              onClick={this.onMarkerClick}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
              }}
              animation={this.props.google.maps.Animation.DROP}
            />
          ))}
         <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}
            position={{
              lat: this.props.selectedItem.lat,
              lng: this.props.selectedItem.lng
            }}
            onClose={this.onClose}>
              <div>
                <h2>{this.props.selectedItem.name}</h2>
                <h3>{this.props.selectedItem.neighborhood}</h3>
                <h3>{this.props.selectedItem.address}</h3>
              </div>
            </InfoWindow>
    
  
      </Map>
      </div>
      <div>
          <ImgList data={this.state.imgs} />
      </div>
    </div>
  )
}
}





export default GoogleApiWrapper({
  apiKey: 'AIzaSyAx9qqXmxIZck6A-W_InVovJFhL5Eg7xRo'
})(MapContainer);