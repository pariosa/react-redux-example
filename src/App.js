import './App.css'; 
import logo from './logo.svg';
import store from './js/store/index';
import Form from './components/form';
import List from './components/list'
import  { connect } from 'react-redux';
import React, { Component } from 'react';
import Title from './styled-components/title';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Button from './styled-components/button';
import Navbar from './components/layout/Navbar';
import Rotate from './styled-components/rotate'; 
import Wrapper from './styled-components/wrapper';
import { increment, decrement } from './js/actions';
import Dashboard from './components/dashboard/Dashboard';
import CreateProject from './components/project/CreateProject'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ProjectDetails from './components/project/ProjectDetails';


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
          {//<Wrapper>
          }
            <div className="App"> 
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/project/:id" component={ProjectDetails}></Route>
                <Route path="/login" component={SignIn}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route path="/newproject" component={CreateProject}></Route>
              </Switch>
              {/*
              <Rotate>🧙</Rotate>
              <Title>Counter: { this.props.count }</Title> 
              <Button onClick= { this.decrementCounter }> -1 (decrement)</Button>
              <Button onClick= { this.incrementCounter }> +1 (increment)</Button>
              <Form/>
                <div className=""> 
                    <Title>Articles</Title>
                    <List /> 
                </div> 
              */}
            </div>
          {//</Wrapper>
          }
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