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

export const __deleteComment = createAsyncThunk(
    "DELETE_TODO",
    async (id, thunkAPI) => {
        try {
            await axios.delete(
                `http://localhost:3001/comment/${id}`
            );
            console.log(id);
            return thunkAPI.fulfillWithValue(id); 
        } catch (error) {
            return thunkAPI.rejecWithValue(error);
        };
});


// export const __updateList = createAsyncThunk(
//     "UPDATE_TODO",
//     async ({ id, thunkAPI }) => {
//       const response = await axios.patch(`http://localhost:3001/list/${listId}`,
//        {
//         thunkAPI: thunkAPI,
//       });
//       return { id, thunkAPI };
//     }
//   );
  


export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: {
      [__deleteComment.fulfilled]: (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.comments = state.comments.filter((comment) => comment.id !== action.payload) //action.payload=id값
       },
    //   [__updateList.fulfilled]: (state, {payload}) => {
    //     return state.map((comment) => {
    //         if (comment.id ===payload.id){
    //             return { ...comment, thunkAPI : payload.thunkAPI};
    //         }else{
    //             return comment;
    //         }
    //     });
    //   },
    },
});

  
  
  // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
  export const {} = commentSlice.actions;
  // reducer 는 configStore에 등록하기 위해 export default 합니다.
  export default commentSlice.reducer;




//   extraReducers: {
//     [__deleteList.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__deleteList.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.comment = action.payload;
//           state.filter((comment) => comment.id !== payload)
//     },
//     [__deleteList.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [updateList.fulfilled]: (state, {payload}) => {
//       return state.map((comment) => {
//           if (comment.id ===payload.id){
//               return { ...comment, thunkAPI : payload.thunkAPI};
//           }else{
//               return comment;
//           }
//       });
//     },
