import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    active: false,
  },
  reducers: {
    togglePopup: (state) => {
      state.active = !state.active;
    },
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
