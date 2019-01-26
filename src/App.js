import React, { Component } from 'react';
import './App.css';
import Models from './components/Models'
import { connect } from 'react-redux';
import ModelDetails from './components/ModelDetails'

class App extends Component {
  state = {}
 
  updateSelection = (event) => {
    this.setState(
      [event.target.value]
    )
  }

  render() {
    return (
      <div className="App">
        <ModelDetails models={this.props.models}/>
        <Models value={this.state} updateSelection={this.updateSelection}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state
  }
}

export default connect(mapStateToProps)(App)