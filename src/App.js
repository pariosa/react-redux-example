import React, { Component } from 'react';
import logo from './logo.svg';
import store from './js/store/index';
import './App.css'; 
import {increment,decrement} from './js/actions';
import  { connect } from 'react-redux';
import Button from './styled-components/button';
import Title from './styled-components/title';
import Wrapper from './styled-components/wrapper';
import Form from "./components/form";

class App extends Component {

  incrementCounter = () => {
    store.dispatch(increment(1)); 
  } 

  decrementCounter = () => {
    store.dispatch(decrement(1)); 
  }  

  render() {
    return (
      <Wrapper>
        <div className="App">
          <body>
            <Title>Counter: { this.props.count }</Title> 
            <Button onClick= { this.decrementCounter }> -1 (decrement)</Button>
            <Button onClick= { this.incrementCounter }> +1 (increment)</Button>
            <Form/>
          </body>
        </div>
      </Wrapper>
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