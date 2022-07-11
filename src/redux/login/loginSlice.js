import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loginDetails: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginDetails: (state, action) => {
      state.loginDetails = action.payload;
    },
  },
});

export const { setLoginDetails } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export default loginSlice.reducer;
