import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addModel } from '../actions/Models'

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

  
class Models extends Component {
    renderModel = (model) => {
      return <option key={model} value={model}> {model} ({data[model].year}) </option>
    }

    handleOnClick = () => {
        const modelObject = data[this.props.value[0]]
        this.props.addModel(modelObject)
    }

render() {

    return (
        <div>
          <select value={this.props.value} onChange={this.props.updateSelection}>
            <option value="">-- pick a model --</option>
              {Object.keys(data).map(computer => this.renderModel(computer))}
          </select>
          {<button onClick={this.handleOnClick}>Add</button>}
        </div>
    )}
}

const mapStateToProps = state => {
    return {
      state
    }
  }
  
export default connect(mapStateToProps, { addModel })(Models)