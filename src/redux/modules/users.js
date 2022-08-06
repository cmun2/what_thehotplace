// src/redux/modules/usersSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
        id: 1,
        title: "react를 배워봅시다.",
        text: "zz",
        isDone: false,
    },
    {
        id: 2,
        title: "redux를 배워봅시다.",
        text : "gg",
        isDone: true,
    }]
};

export const usersSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const { } = usersSlice.actions;
export default usersSlice.reducer;