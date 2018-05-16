import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'

class Auckland extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [
        -36.924106,
        174.851160
      ],
      coords: [
        -36.8670921833,
        174.7585096333
      ],
      coords1: [
        -36.886042,
        175.004021
      ],
      zoom: 11
    }
  }

  render() {
    const provider = new OpenStreetMapProvider()
    const markers = this.state.hasLocation ? (
      <Marker position={this.state.address.map(location => 
        location.coord
        )}>
        <Popup>
          <span>{location.eventname}</span>
        </Popup>
      </Marker>
    ) : null

    return (
      <Map center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1pbHljb2NvIiwiYSI6ImNqaDZ2bzRtYTAxaGEyeXA3NHV3em00c3YifQ.vPrXAwEUUzaJ27sV39ATqw"
        />
        <Marker position={this.state.coords}>
          <Popup>
            <span>
              EDA <br /> 7am-10pm
            </span>
          </Popup>
        </Marker>
        <Marker position={this.state.coords1}>
          <Popup>
            <span>
              House <br /> Call on arrival
            </span>
          </Popup>
        </Marker>
        {markers}
      </Map>
    )
  }
}

export default Auckland

// new GeoSearchControl({
//   provider: myProvider,                               // required
//   showMarker: true,                                   // optional: true|false  - default true
//   showPopup: false,                                   // optional: true|false  - default false
//   marker: {                                           // optional: L.Marker    - default L.Icon.Default
//     icon: new L.Icon.Default(),
//     draggable: false,
//   },
//   popupFormat: ({ query, result }) => result.label,   // optional: function    - default returns result label
//   maxMarkers: 10,                                      // optional: number      - default 1
//   retainZoomLevel: true,                             // optional: true|false  - default false
//   animateZoom: false,                                  // optional: true|false  - default true
//   autoClose: false,                                   // optional: true|false  - default false
//   searchLabel: 'Enter address',                       // optional: string      - default 'Enter address'
//   keepResult: true                                  // optional: true|false  - default false
// });