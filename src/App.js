import React, { Component } from 'react';
import logo from './logo.svg';
import store from './js/store/index';
import './App.css'; 
import {increment,decrement} from './js/actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  };
  incrementCounter = () => {
    store.dispatch(increment(1));
    console.log(store.getState());
  } 
  decrementCounter = () => {
    store.dispatch(decrement(1));
    console.log(store.getState());
  }  
  render() {
    return (
      <div className="App">
        <body>
          <h1>Counter: { this.state.count }</h1> 
          <button onClick= { this.decrementCounter }> -1 (decrement)</button>
          <button onClick= { this.incrementCounter }> +1 (increment)</button>
        </body>
      </div>
    );
  }
}

export default App;
