import React, { Component } from 'react';
import './App.css';
import request from 'request'
import axios from 'axios'

class App extends Component {
    
    constructor(props) {
        super(props);
            this.state = {
                unsplashJSON: {},
                pics: [],
                growers: [],
                isLoaded: false,
                error: null
            }    
    }

    componentDidMount() {
        this.renderMap();
        this.getPics()
}

getPics() {
   fetch('https://api.unsplash.com/collections/4297159/photos?&client_id=4fc5dec670dc9f6f8fa81b1c5abfe37c988fab2a510da8183f940463d8482203&per_page=29')
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           isLoaded: true,
           unsplashJSON: result.unsplashJSON
         });
       },
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
}

convertPics() {
    
    var unsplashArr  = [],
         keys = Object.keys(this.state.unsplashJSON);
     
     for(var i=0,n=keys.length;i<n;i++){
       var key  = keys[i];
       unsplashArr[key] = this.state.unsplashJSON[key];
       console.log(unsplashArr[key].user.name);
       console.log(unsplashArr[key].urls.small);
       console.log(key)
     }
     this.setState({pics: unsplashArr})
 }
 


    initMap = () =>  {
       const map = new window.google.maps.Map(document.getElementById('map'), {
         center: {lat: 40.34383, lng: -104.8534},
         zoom: 14
       })
     }

     renderMap = () => {
         mapScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAx9qqXmxIZck6A-W_InVovJFhL5Eg7xRo&callback=initMap")
         window.initMap = this.initMap
     }
     


     render() {
         return (
           <main>
             <div id="map"></div>
             
             <div> 
             <h1>This is</h1>
             <p>{this.state.unsplashJSON[0]}</p>
             </div>
           </main>
         )
       }
     }

     function mapScript(url) {
         var ref = window.document.getElementsByTagName("script")[0]
         var script = window.document.createElement("script")
         script.src = url
         script.async = true
         script.defer = true
         ref.parentNode.insertBefore(script, ref)
}




    
export default App
