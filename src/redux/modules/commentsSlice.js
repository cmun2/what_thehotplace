import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  comment: [
    {
      id: uuidv4(),
      ment: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (id, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://localhost:3001/comment?postId=${id}`
      );
      //console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
