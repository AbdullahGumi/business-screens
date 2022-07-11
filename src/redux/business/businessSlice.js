import { createSlice } from "@reduxjs/toolkit";
import { getFavBusinesses } from "../../api/dummyAPI";

export const initialState = {
  loading: false,
  hasErrors: false,
  business: {},
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    getBusiness: (state) => {
      state.loading = true;
    },
    getBusinessSuccess: (state, { payload }) => {
      state.business = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getBusinessFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBusiness, getBusinessSuccess, getBusinessFailure } =
  businessSlice.actions;

export const businessSelector = (state) => state.business;

export default businessSlice.reducer;

export function fetchBusiness() {
  return async (dispatch) => {
    dispatch(getBusiness());

    try {
      const data = await getFavBusinesses();

      dispatch(getBusinessSuccess(data));
    } catch (error) {
      dispatch(getBusinessFailure());
    }
  };
}
