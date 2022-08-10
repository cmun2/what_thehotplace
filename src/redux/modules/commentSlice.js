import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  comment: [
    {
      id: uuidv4(),
      ment: "하하하",
    },
  ],
};

const commentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addComment: (state, action) => {
      //immer 자동적용
      state.comment = [...state.comment, action.payload.counters];
      // return {
      //   ...state,
      //   comment: [...state.comment, action.payload.counters],
      // };
    },
    // deleteComment: (state, action) => {
    //   state.comment = state.comment.filter(
    //     (comment) => comment.id !== action.payload
    //   );
    // },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
