import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ title: "신사동 카페", coments: "사진 맛집", img: '이미지' },
{ title: "강남 카페", coments: "커피가 맛있어요", img: '이미지2' }]


const counterSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    addNumber: (state , action) => {
      state = [state, action.payload]
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
