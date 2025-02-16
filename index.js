import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const initialState = {
  users: [
    {
      id: 1,
      name: "Maia",
    },
    {
      id: 2,
      name: "John",
    },
  ],
  tasks: [
    {
      title: "File the taxes report",
    },
    {
      title: "Buy groceries",
    },
  ],
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addUser = (user) => ({ type: ADD_USER, payload: user });
const addTask = (task) => ({ type: ADD_TASK, payload: task });

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }

  return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }

  return tasks;
};

const reducer = combineReducers({
  users: userReducer,
  tasks: taskReducer,
});

// const reducer = (state, action) => {
//   if (action.type === ADD_USER) {
//     return { ...state, users: [...state.users, action.payload] };
//   }
//   if (action.type === ADD_TASK) {
//     return { ...state, tasks: [...state.tasks, action.payload] };
//   }
// };

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 3, name: "Jane" }));
