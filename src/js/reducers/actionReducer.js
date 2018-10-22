import { ADD_ARTICLE, INCREMENT, DECREMENT } from "../constants/action-types";


const initialState = {
	articles: [],
	count: 0,
};

const actionReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_ARTICLE: 
			return {...state, articles: [...state.articles, action.payload] };
		case INCREMENT: 
			return {...state, count: state.count + action.payload};
		case DECREMENT: 
			return {...state , count: state.count - action.payload};
		default:
			return state;
	}
};

export default actionReducer;
