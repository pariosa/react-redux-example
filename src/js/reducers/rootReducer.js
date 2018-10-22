import authReducer from './authReducer';
import projectReducer from './projectReducer';
import actionReducer from './actionReducer';
import {firestoreReducer} from 'redux-firestore';
import { combineReducers } from 'redux';


const initialState = {
	articles: [],
	count: 0,
};

const rootReducer = combineReducers({
	auth:authReducer,
	project:projectReducer,
	action:actionReducer,
	firestore: firestoreReducer
});

export default rootReducer;
