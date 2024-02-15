import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    userInfo: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
