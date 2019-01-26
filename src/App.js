import React, { Component } from 'react';
import './App.css';
import Models from './components/Models'


class App extends Component {
    state = {}
 

  updateSelection = (event) => {
    this.setState(
      [event.target.value]
    )
  }

  
  render() {
    // console.log(this.state)
    return (
      <div className="App">
    <Models value={this.state} updateSelection={this.updateSelection}/>
      </div>
    );
  }
}

export default App;
