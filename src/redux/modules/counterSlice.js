// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    // {
    //     id: 1,
    //     title: "react를 배워봅시다.",
    //     text: "zz",
    //     isDone: false,
    // },
    // {
    //     id: 2,
    //     title: "redux를 배워봅시다.",
    //     text : "gg",
    //     isDone: true,
    // },
  ]
};

// 우리가 추가한 Thunk 함수
export const __getTodos = createAsyncThunk(
  "getTodos",
  (payload, thunkAPI) => { }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.posts = [...state.posts, action.payload];
      console.log(state.posts)
    }
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodo } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;