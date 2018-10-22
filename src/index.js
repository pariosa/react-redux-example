import './index.css';
import App from './App';
import React from 'react';
import index from "./js/index";
import store from "./js/store";
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from './firebase/config';
import * as serviceWorker from './serviceWorker';
import rootReducer from './js/reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';


const newStore = createStore(rootReducer, 
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase),
		reactReduxFirebase(firebase)
	)
)

ReactDOM.render(
	<Provider store={newStore}>
		<App />
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
