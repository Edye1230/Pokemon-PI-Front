import { applyMiddleware, createStore } from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store));

export default store;
