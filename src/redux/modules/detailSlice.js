import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const __getDetail = createAsyncThunk(
  "getdetail/getDetail",
  async (payload, thunkAPI) => {
      const data = await axios.get(`http://localhost:3001/list/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
  }
);

export const detailSlice = createSlice({
  name: "getdetail",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDetail.fulfilled]: (state, action) => {
      state.detail = action.payload; 
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;