import { configureStore } from "@reduxjs/toolkit";
import genteralSlice from "./genteralSlice";
import userAuthSlice from "./userAuthSlice";
import deisgnStudySlice from "./deisgnStudySlice";

const store = configureStore({
  reducer: {
    general: genteralSlice,
    userAuth: userAuthSlice,
    designStudy: deisgnStudySlice,
  },
});

export default store;
