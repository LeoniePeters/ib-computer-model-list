import * as React from 'react'
import PropTypes from 'prop-types'

export default function ModelDetails(props) {
  props.models.propTypes = {
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired
  }
  
  return (
    <div>
      { props.models.map(model => <ul key={model.name}>
        <li>Name: {model.name}</li>
        <li>Manufacturer: {model.manufacturer}</li>
        <li>Year: {model.year}</li>
        <li>Origin: {model.origin}</li>
        </ul> 
      )}
    </div>
  )
}