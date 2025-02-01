import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const initialState = {
  value: 0,
};

const reducer = (state, action) => {
  return state;
};

const incrementAction = { type: "INCREMENT" };

const store = createStore(reducer);

console.log(store);
