import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const makeLouder = (string) => string.toUpperCase();

const repeatthreeTimes = (string) => string.repeat(3);

const embolden = (string) => string.bold();

// const makeLouderThreeTimesAndEmbolden = (string) =>
//   embolden(repeatthreeTimes(makeLouder(string)));

const makeLouderThreeTimesAndEmbolden = compose(
  embolden,
  repeatthreeTimes,
  makeLouder
);

console.log(makeLouderThreeTimesAndEmbolden("hello"));
