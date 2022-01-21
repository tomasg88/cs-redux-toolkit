import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    refreshUsersList: (state, action) => {
      console.log("userSlice: ", action);
      state.userList = action.payload;
    }
  }
});

export const { refreshUsersList } = userSlice.actions;

export default userSlice.reducer;
