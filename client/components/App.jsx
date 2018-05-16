import React from 'react'

import MapAuckland from './MapAuckland'
import Form from './Form'

const App = () => {
  return (
    <div className='page-section'>
      <h1>Leaflet is here!</h1>
      <Form />
      <MapAuckland />
    </div>
  )
}

export default App
