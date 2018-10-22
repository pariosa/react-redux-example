import { ADD_ARTICLE, INCREMENT, DECREMENT} from "../constants/action-types";



export const addArticle = article => ({
	type: "ADD_ARTICLE", 
	payload: article
});

export const increment = count => ({
	type: "INCREMENT", 
	payload: count
});
export const decrement = count => ({
	type: "DECREMENT", 
	payload: count
});