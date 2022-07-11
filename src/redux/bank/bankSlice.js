import { createSlice } from "@reduxjs/toolkit";
import { getBankDetails } from "../../api/dummyAPI";

export const initialState = {
  loading: false,
  hasErrors: false,
  bank: {},
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    getBank: (state) => {
      state.loading = true;
    },
    getBankSuccess: (state, { payload }) => {
      state.bank = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getBankFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBank, getBankSuccess, getBankFailure } = bankSlice.actions;

export const bankSelector = (state) => state.bank;

export default bankSlice.reducer;

export function fetchBank() {
  return async (dispatch) => {
    dispatch(getBank());

    try {
      const data = await getBankDetails();

      dispatch(getBankSuccess(data));
    } catch (error) {
      dispatch(getBankFailure());
    }
  };
}
