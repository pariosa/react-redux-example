import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import store from './js/store/index';
import './App.css'; 
import {increment,decrement} from './js/actions';
import  { connect } from 'react-redux';
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    background: palevioletred;
    color:white;
  }
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

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