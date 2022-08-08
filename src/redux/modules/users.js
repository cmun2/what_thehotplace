import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {  title: "신사동 카페", coments: "사진 맛집", img: '이미지',  },
    {  title: "강남 카페", coments: "커피가 맛있어요", img: '이미지2',},
  ]
}




const counterSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.todos = [state, action.payload]
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   number: 0,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     addNumber: (state, action) => {
//       state.number = state.number + action.payload;
//       console.log(state.number)
//     },

//     minusNumber: (state, action) => {
//       state.number = state.number - action.payload;
//     },
//   },
// });

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { addNumber, minusNumber } = counterSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default counterSlice.reducer;
