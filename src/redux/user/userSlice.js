import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../../api/ProfileAPI";

export const initialState = {
  loading: false,
  hasErrors: false,
  userInitialsColor: `hsla(${Math.random() * 360}, 100%, 50%, 1)`,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getUser, getUserSuccess, getUserFailure, setUser } =
  userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;

export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const data = await getUserProfile();

      dispatch(getUserSuccess(data));
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
}
