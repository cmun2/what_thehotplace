import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  comment: [
    {
      userId: uuidv4(),
      ment: "하하하",
    },
  ],
  detail:  [
    {
      "id": 1,
      "title": "hello world!",
      "body": "미쳤어"
    }
  ]
};

const commentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addComment: (state, action) => {
      return {
        ...state,
        comment: [...state.comment, action.payload.counters],
      };
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
