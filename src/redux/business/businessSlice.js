import { createSlice } from "@reduxjs/toolkit";
import { getBusinessProfile } from "../../api/ProfileAPI";

export const initialState = {
  loading: false,
  hasErrors: false,
  businesses: [
    {
      id: 45,
      name: "JD Business Inc.",
      phone: "441234567890",
      lat: "51.5054734",
      lng: "-0.1372065",
      d_link: "https://google.com",
      service_code: "PK234",
      distance: "0.34 KM",
      address: "Westminster, London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin elit eu orci laoreet, at mollis nibh elementum. Proin id faucibus mauris. Pellentesque non metus a nulla dignissim tristique a nec leo. Ut a sagittis mauris",
      category_tags: ["pharmacy", "health", "medical"],
      photo_urls: [
        "https://www.fillmurray.com/500/400",
        "https://www.fillmurray.com/500/400",
        "https://www.fillmurray.com/500/400",
      ],
      video_urls: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
    },
  ],
  relatedBusinesses: [
    {
      id: 792,
      name: "Lorem 1 Business",
      phone: "441234567890",
      lat: "51.5054734",
      lng: "-0.1372065",
      address: "Random Town A",
      distance: "0.5 KM",
      photo_urls: "https://www.fillmurray.com/500/400",
      is_favorite: true,
    },
    {
      id: 325,
      name: "Lorem 2 Inc.",
      phone: "441234567890",
      lat: "51.5054734",
      lng: "-0.1372065",
      address: "Random Town Z",
      distance: "5.5 KM",
      photo_urls: null,
      is_favorite: false,
    },
  ],
  businessById: {},
  relatedBusinessesById: {},
  business: {},
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusinessProfile: (state, action) => {
      state.business = action.payload;
    },
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
    getBusinessById: (state, action) => {
      state.businessById = state.businesses.filter(
        (item) => item.id === action.payload
      );
    },
    getRelatedBusinessesByBusinessId: (state, action) => {
      state.relatedBusinessesById = state.relatedBusinesses;
    },
  },
});

export const {
  getBusiness,
  getBusinessSuccess,
  getBusinessFailure,
  setBusinessProfile,
  getBusinessById,
  getRelatedBusinessesByBusinessId,
} = businessSlice.actions;

export const businessSelector = (state) => state.business;

export default businessSlice.reducer;

export function fetchBusiness() {
  return async (dispatch) => {
    dispatch(getBusiness());

    try {
      const data = await getBusinessProfile();

      dispatch(getBusinessSuccess(data));
    } catch (error) {
      dispatch(getBusinessFailure());
    }
  };
}
