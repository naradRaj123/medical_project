import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { addLocation,
 } = locationSlice.actions;

export const selectlocation = (state) => state.location.location;

export default locationSlice.reducer;
