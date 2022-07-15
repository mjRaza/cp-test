import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import user from "./user/reducer"
import posts from "./posts/reducer"
const composeEnhancers = composeWithDevTools || compose;

export default createStore(
  combineReducers({
    user,
    posts
  }),
  composeEnhancers(applyMiddleware(thunk)),
);