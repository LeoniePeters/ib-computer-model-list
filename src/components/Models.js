import React, { Component } from 'react'

const data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }
  
export default class Models extends Component {
    renderModel(model) {
      return <option key={model} value={model}> {model} ({data[model].year}) </option>
    }

    render() {
        // console.log(this.props.updateSelection)
        return (
          <select value={this.props.value} onChange={this.props.updateSelection}>
            <option value="">-- pick a model --</option>
              {Object.keys(data).map(computer => this.renderModel(computer))}</select>
        )}
}