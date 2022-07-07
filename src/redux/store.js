import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import businessReducer from "./business/businessSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    business: businessReducer,
  },
});
