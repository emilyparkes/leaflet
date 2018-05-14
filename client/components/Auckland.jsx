import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class Auckland extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: [
        -36.8670921833,
        174.7585096333
      ],
      zoom: 13
    }
  }
  render() {

    return (
      <Map center={this.state.position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1pbHljb2NvIiwiYSI6ImNqaDZ2bzRtYTAxaGEyeXA3NHV3em00c3YifQ.vPrXAwEUUzaJ27sV39ATqw"
        />
        <Marker position={this.state.position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default Auckland