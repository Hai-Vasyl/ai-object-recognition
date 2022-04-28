import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "../components/popup/redux/popup-slice";

export const store = configureStore({
  reducer: {
    popup: popupSlice,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
