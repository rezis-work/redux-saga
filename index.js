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
const ADD = "ADD";
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);

// 1. create a subscriber

const subscriber = () => console.log("SUBSCRIBER", store.getState());

store.subscribe(subscriber);

// actions bind

const actions = bindActionCreators({ increment, add }, store.dispatch);

// const dispatchAdd = compose(store.dispatch, add);
// const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) =>
//   compose(store.dispatch, fn)
// );

// dispatchAdd(1000);
// dispatchIncrement();

actions.add(1000);
actions.increment();
