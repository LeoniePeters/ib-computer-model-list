import * as React from 'react'

export default function ModelDetails(props) {
    return (
    <div>
        { props.models.map(model => <ul key={model.name}>
        <li>Name: {model.name}</li>
        <li>Manufacturer: {model.manufacturer}</li>
        <li>Year: {model.year}</li>
        <li>Origin: {model.origin}</li>
        </ul>
    ) }
    </div>
    )
}