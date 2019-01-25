import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
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


  renderModel(model) {
    return <option value={model}> {model} ({this.state[model].year}) </option>
  }



  render() {
    return (
      <div className="App">
        <select>
          <option value="">-- pick a model --</option>
        {Object.keys(this.state).map(computer => 
          this.renderModel(computer))}</select>
      </div>
    );
  }
}

export default App;
