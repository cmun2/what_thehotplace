// src/redux/modules/usersSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const usersSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;