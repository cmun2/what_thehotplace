import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  detail: {
    id: 1,
    title: "hello world!",
    body: "미쳤어",
  },
};

const commentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getDetail: (state, action) => {
      return {
        ...state,
        detail: action.payload,
      };
    },
  },
});

export const { getDetail } = commentSlice.actions;
export default commentSlice.reducer;
