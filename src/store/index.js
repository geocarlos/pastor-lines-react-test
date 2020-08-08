import { createStore, applyMiddleware } from "redux";

import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducer from "../reducers";

const createWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

const store = createWithMiddleware(reducer);

export default store;
