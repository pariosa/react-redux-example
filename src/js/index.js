import store from "../js/store/index";
import { addArticle, increment, decrement } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;
window.increment = increment;
window.decrement = decrement;
