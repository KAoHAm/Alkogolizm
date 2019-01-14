import { createStore } from "redux";
import rootReducer from "../reduser/index";
const store = createStore(rootReducer);

export default store;

