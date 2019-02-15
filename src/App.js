import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
    componentDidMount() {
        this.renderMap()
    
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

           </main>
         );
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

export default App;
