import { configureStore } from "@reduxjs/toolkit";
import tesbihsReducer from "../features/tesbihs/tesbihsSlice";

export const store = configureStore({
  reducer: {
    tesbihs: tesbihsReducer,
  },
});
