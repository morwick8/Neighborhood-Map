import React, { Component } from "react";
import ReactDOM from "react-dom";
import MapContainer from "./MapContainer";
import Header from "./Header";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./App.css"

const data = [
				{
            "id": 0,
            "name": "Jasmine",
            "latitude": 40.3278975,
            "longitude": -104.8399037,
           "neighborhood": "Settlers Village",
            "address": "2192 Carriage Dr, Milliken, CO"
            },
            {
            "id": 0,
            "name": "Wonder Woman",
            "latitude": 40.326043,
            "longitude": -104.835552,
           "neighborhood": "Settlers Village",
            "address": "2544 Stage Coach Dr, Milliken, CO"
            },


         {
            "id": 1,
            "name": "Mickey Mouse",
            "latitude": 40.3163286,
            "longitude": -104.8499167,
            "animation": "google.maps.Animation.DROP",
            "neighborhood": "Centennial Farms",
            "address": "1557 Cattleman Court Milliken, CO"

         
            }, 
            {
            "id": 2,
            "name": "Donald Duck",
            "latitude": 40.3185015,
            "longitude": -104.8571216,
            "animation": "google.maps.Animation.DROP",
            "neighborhood": "Centennial Farms",
            "address": "1271 S. Haymaker Dr, Milliken, CO"
          
          },
         {
            "id": 3,
            "name": "Minnie Mouse",
            "latitude": 40.3186919,
            "longitude":-104.8519208,
               "animation": "google.maps.Animation.DROP",
           "neighborhood": "Centennial Farms",
            "address": "1341 Farmland Lane, Milliken, CO"
         
          
        },
            {
            "id": 4,
            "name": "Mickey Mouse",
            "latitude": 40.3177248,
            "longitude": -104.8502498,
              "animation": "google.maps.Animation.DROP",
           "neighborhood": "Centennial Farms",
            "address": "1305 S. Cattleman Dr, Milliken, CO"
         
            }, 
            {
            "id": 5,
            "name": "Goofy",
            "latitude": 40.31778815,
            "longitude": -104.8510198,
             "animation": "google.maps.Animation.DROP",
             "neighborhood": "Centennial Farms",
            "address": "1322 S. Cora Ave, Milliken, CO"
         
          },
         {
            "id": 6,
            "name": "Boober",
            "latitude": 40.3275678,
            "longitude": -104.8654943,
            "neighborhood": "Old Town Milliken",
            "address": "307 S. Olive Ave, Milliken, CO"
          
        },
            {
            "id": 7,
            "name": "Gobo",
            "latitude": 40.3304652,
            "longitude": -104.8654143,
            "neighborhood": "Old Town Milliken",
            "address": "107 N. Olive Ave, Milliken, CO"
           
            }, 
            {
            "id": 8,
            "name": "Red",
            "latitude": 40.3304743,
            "longitude": -104.8651985,
            "neighborhood": "Old Town Milliken",
            "address": "108 N. Olive Ave, Milliken, CO"
          
          },
         {
            "id": 9,
            "name": "Mokey",
            "latitude": 40.3304602,
            "longitude": -104.8651992,
            "neighborhood": "Old Town Milliken",
            "address": "101 N. Olive Ave, Milliken, CO"
         
        },
            {
            "id": 10,
            "name": "Wembly",
            "latitude": 40.3302112,
            "longitude": -104.8651025,
            "neighborhood": "Old Town Milliken",
            "address": "306 Broad St, Milliken, CO"
          
            }, 
            {
            "id": 11,
            "name": "Captain America",
            "latitude": 40.3222326,
            "longitude": -104.8456408,
            "neighborhood": "Colony Point",
            "address": "794 Saddleback Dr, Milliken, CO"
          
          },
         {
            "id": 12,
            "name": "Iron Man",
            "latitude": 40.3236211,
            "longitude": -104.8478199,
            "neighborhood": "Colony Point",
            "photograph": "4.jpg",
            "address": "711 Wagon Train Dr, Milliken, CO"
          },
        {
            "id": 13,
            "name": "Spider Man",
            "latitude": 40.3285792,
            "longitude": -104.8704677,
            "neighborhood": "Colony Point",
            "address": "235 S. Tamera Ave, Milliken, CO"
          
            }, 
            {
            "id": 14,
            "name": "Black Widow",
            "latitude": 40.3234622,
            "longitude": -104.846636,
            "neighborhood": "Colony Point",
            "address": "612 Traildust Dr, Milliken, CO"
          
          },
         {
            "id": 15,
            "name": "Han Solo",
            "latitude": 40.3299803,
            "longitude": -104.8714728,
           "neighborhood": "Frank Farms",
            "address": "381 W. Cottonwood St, Milliken, CO"
          
        },
            {
            "id": 16,
            "name": "Princess Leia",
            "latitude": 40.3288909,
            "longitude": -104.867537,
            "neighborhood": "Frank Farms",
            "address": "202 S. Quentine Ave, Milliken, CO"
          
            }, 
            {
            "id": 17,
            "name": "Luke Skywalker",
            "latitude": 40.3259837,
            "longitude": -104.869235,
            "neighborhood": "Frank Farms",
            "photograph": "2.jpg",
            "address": "542 S. Savannah Circle, Milliken, CO"
         
          },
         {
            "id": 18,
            "name": "Obi Wan",
            "latitude": 40.326402,
            "longitude": -104.868842,
            "neighborhood": "Frank Farms",
            "address": "67 W. Hawthorne St, Milliken, CO"
           
        },
            {
            "id": 19,
            "name": "Darth Vader",
            "latitude": 40.323572,
            "longitude": -104.864996,
            "neighborhood": "Frank Farms",
            "address": "240 E. Juneberry St, Milliken, CO"
         
            }, 
            {
            "id": 20,
            "name": "Spock",
            "latitude": 40.3532771,
            "longitude": -104.8710335,
            "neighborhood": "Mad Russian",
            "address": "351 Heidie Lane, Milliken, CO"
          
          },
         {
            "id": 21,
            "name": "Bones",
            "latitude": 40.353013,
            "longitude": -104.871629,
            "neighborhood": "Mad Russian",
            "photograph": "4.jpg",
            "address": "412 Heidie Lane, Milliken, CO"
          
        },
            {
            "id": 22,
            "name": "James T Kirk",
            "latitude": 40.3545575,
            "longitude": -104.8724245,
            "neighborhood": "Mad Russian",
            "photograph": "1.jpg",
            "address": "97 Double Eagle Dr, Milliken, CO"
          
            }, 
            {
            "id": 23,
            "name": "Scottie",
            "latitude": 40.3506538,
            "longitude": -104.8731847,
            "neighborhood": "Mad Russian",
            "photograph": "2.jpg",
            "address": "2245 Birdie Way, Milliken, CO"
          
          },
         {
            "id": 24,
            "name": "Ariel",
            "latitude": 40.722216,
            "longitude": -104.834972,
            "neighborhood": "Settlers Village",
            "address": "2544 Carriage Dr, Milliken, CO"
          
        },
            {
            "id": 25,
            "name": "Cinderella",
            "latitude": 40.325561,
            "longitude": -104.834907,
            "neighborhood": "Settlers Village",
            "address": "462 S. Carriage Dr, Milliken, CO"
          
          },
         {
            "id": 26,
            "name": "Snow White",
            "latitude": 40.325075,
            "longitude": -104.835686,
            "neighborhood": "Settlers Village",
            "address": "624 Schoolhouse Dr, Milliken, CO"
        },
            {
            "id": 27,
            "name": "Belle",
            "latitude": 40.3278195,
            "longitude": -104.8368156,
            "neighborhood": "Settlers Village",
            "address": "2522 Stage Coach Dr, Milliken, CO"
         
            }
           ];

const GrowerList = props => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index} onClick={e => props.onClick(e, item)}>
              {item.name} {item.address} {item.address}
            </li>
          );
        })}
      </ul>
    </div>
  );
};



class App extends Component {
  state = {
    selectedItem: { lat: 0, lng: 0 }
  };

  showInfo(e, selectedItem) {
    this.setState({ selectedItem: selectedItem });
    console.log(selectedItem);
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Centennial Farms</h1>
        <GrowerList items={data} onClick={this.showInfo.bind(this)} />
        <MapContainer
          center={{ lat: 40.33483, lng: -104.8534 }}
          zoom={14}
          data={data}
          selectedItem={this.state.selectedItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA