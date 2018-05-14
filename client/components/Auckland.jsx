import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


class Auckland extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className='leaflet-container'>
        <Map center={this.state.position} zoom={this.state.zoom} onclick={this.getPosition} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br />Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default Auckland