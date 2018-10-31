import thunk from 'redux-thunk'; 
import firebase from '../../firebase/config';
import rootReducer from "../reducers/rootReducer"; 
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

const rrfConfig = {
	attachAuthIsReady: true,
	userProfile: 'users',
	enableLogging: true,
	useFirestoreForProfile: true  
}

const store = createStore(rootReducer, 
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase),
		reactReduxFirebase(firebase, rrfConfig)
	)
)

export default store;