import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/User/redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice
  }
});
