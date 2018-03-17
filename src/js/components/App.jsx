import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {incrementCounter,decrementCounter} from '../actions'



class App extends Component {
  constructor() {
    super();
    }

  render() {
    return (
      <div className="app">
      <div
       className="btn btn-primary"
       style={{marginLeft:'20px'}}
       onClick={()=>this.props.incrementCounter()}
      >
      Increment
      </div>
      <div
       className="btn btn-primary"
        style={{marginLeft:'20px'}}
        onClick={()=>this.props.decrementCounter()}
        >
      Decrement
      </div>
      <div>
        <h2>The value is </h2>
        <h3>{this.props.counter}</h3>
      </div>
      </div>
    );
  }
};

function mapStateToProps(state){
    counter:counter
}

export default connect(mapStateToProps,{incrementCounter,decrementCounter})(App)
