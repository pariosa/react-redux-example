import React, { Component } from 'react';
import logo from './logo.svg';
import store from './js/store/index';
import './App.css'; 
import {increment,decrement} from './js/actions';
import  { connect } from 'react-redux';
import Button from './styled-components/button';
import Title from './styled-components/title';
import Rotate from './styled-components/rotate';
import Wrapper from './styled-components/wrapper';
import Form from './components/form';
import List from './components/list'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {

  incrementCounter = () => {
    store.dispatch(increment(1)); 
  } 

  decrementCounter = () => {
    store.dispatch(decrement(1)); 
  }  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Wrapper>
            <div className="App"> 
              <Switch>
                <Route path="/" component={Dashboard}></Route>
              </Switch>
              <Rotate>🧙</Rotate>
              <Title>Counter: { this.props.count }</Title> 
              <Button onClick= { this.decrementCounter }> -1 (decrement)</Button>
              <Button onClick= { this.incrementCounter }> +1 (increment)</Button>
              <Form/>
                <div className=""> 
                    <Title>Articles</Title>
                    <List /> 
                </div> 
            </div>
          </Wrapper>
        </div>
      </BrowserRouter>
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