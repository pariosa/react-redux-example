import './index.css';
import App from './App';
import React from 'react';
import index from "./js/index";
import store from "./js/store";
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './js/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';

const newStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={newStore}>
		<App />
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
