import React, { Component } from 'react';
import logo from './logo.svg';
import store from './js/store/index';
import './App.css'; 
import {increment,decrement} from './js/actions'
import  { connect } from 'react-redux';
class App extends Component {

  incrementCounter = () => {
    store.dispatch(increment(1)); 
  } 

  decrementCounter = () => {
    store.dispatch(decrement(1)); 
  }  
  
  render() {
    return (
      <div className="App">
        <body>
          <h1>Counter: { this.props.count }</h1> 
          <button onClick= { this.decrementCounter }> -1 (decrement)</button>
          <button onClick= { this.incrementCounter }> +1 (increment)</button>
        </body>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
}

const mapDispatchToProps = {
    increment,
    decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);