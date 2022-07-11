import { configureStore } from "@reduxjs/toolkit";
import businessReducer from "./business/businessSlice";
import bankReducer from "./bank/bankSlice";
import loginReducer from "./login/loginSlice";
export const store = configureStore({
  reducer: {
    business: businessReducer,
    bank: bankReducer,
    login: loginReducer,
  },
});
