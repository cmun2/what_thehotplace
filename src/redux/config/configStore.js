import { configureStore } from "@reduxjs/toolkit";

import counter from "../modules/commentSlice";
import users from "../modules/users";

const store = configureStore({
  reducer: { counter: counter, users: users },
});

export default store;

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import users from "../modules/users";
// const rootReducer = combineReducers({
//   users: users,
// });

// const store = createStore(rootReducer);
