import React, { Component } from 'react';
import './App.css';
import request from 'request';
import axios from 'axios'
import * as growers from './data/growers.json';
//import GetMarker from './GetMarker'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Header from './Header.js';
import MakeInfoWindow from './MakeInfoWindow';
import ReactDOMServer from 'react-dom/server'
import PostPic from './PostPic'
import ImgList from './ImgList'

class App extends React.Component {
    
    constructor(props) {
        super(props);
            this.state = {
                imgs: {},
                growers: {},
                isLoading: false,
                error: null,
                lat: ''
            }    
    }

    componentDidMount() {
        this.renderMap();
        this.getImgs();
        this.getGrowers()
}

getImgs() {
    axios
      .get(
        `https://api.unsplash.com/collections/4297159/photos?page=1&per_page=29&client_id=4fc5dec670dc9f6f8fa81b1c5abfe37c988fab2a510da8183f940463d8482203`
      )
      .then(data => {
        this.setState({ imgs: data.data, loadingState: false });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
     
 }

 getGrowers() {
   axios.get('./data/growers.json') // JSON File Path
   .then( response => {
     this.setState({
     growers: response.data
   });
 })
 .catch(function (error) {
   console.log(error);
 });
}

    initMap = () =>  {
       const map = new window.google.maps.Map(document.getElementById('map'), {
         center: {lat: 40.33483, lng: -104.8534},
         zoom: 14
       })

 //      this.state.growers.map(grower => {
    var highlightedIcon = {
        url:  'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}

    var defaultIcon = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
       var marker = new window.google.maps.Marker({
    position: {lat: 40.33483, lng: -104.8534},
    map: map,
    animation: window.google.maps.Animation.DROP,
    title: 'Hello World!'
   });

       var infowindow = new window.google.maps.InfoWindow ({
        
       })

       let contentString = ReactDOMServer.renderToString(<MakeInfoWindow/>)

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


//            })
     }

     renderMap = () => {
         this.mapScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAx9qqXmxIZck6A-W_InVovJFhL5Eg7xRo&callback=initMap")
         window.initMap = this.initMap
 
    } 
     
      mapScript = (url) => {
         var ref = window.document.getElementsByTagName("script")[0]
         var script = window.document.createElement("script")
         script.src = url
         script.async = true
         script.defer = true
         ref.parentNode.insertBefore(script, ref)
}


render() {
  return (
    <main>
    <div className="container" role="main">
        <Header/>
        <div id="map">

<Marker
    name={'Your position'}
    position={{lat: 40.34383, lng: -104.8534}}
    icon={{
      url: "/path/to/custom_icon.png",
    }} />
    </div>
    <div>

          {this.state.isLoading
            ? <p>Loading</p>
            : <ImgList data={this.state.imgs} />}
            </div>
    </div>
    </main>
  )
}
}





export default App;
    
