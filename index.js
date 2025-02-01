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

const INCREMENT = "INCREMENT";
const incrementAction = { type: INCREMENT };

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }
  return state;
};

// const incrementAction = { type: "counter/increment" };

const store = createStore(reducer);

console.log(store.getState());
