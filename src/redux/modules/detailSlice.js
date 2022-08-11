import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  detail: {
   
  },
};

const detailSlice = createSlice({
  name: "getdetail",
  initialState,
  reducers: {
    getDetail: (state, action) => {
      return {
        ...state,
        detail: action.payload,
      };
    }
  },
});

export const { getDetail } = detailSlice.actions;
export default detailSlice.reducer;
