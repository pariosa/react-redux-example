import { ADD_ARTICLE, INCREMENT, DECREMENT } from "../constants/action-types";
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import actionReducer from './actionReducer';

import { combineReducers } from 'redux';


const initialState = {
	articles: [],
	count: 0,
};

const rootReducer = combineReducers({
	auth:authReducer,
	project:projectReducer,
	action:actionReducer
});

export default rootReducer;
