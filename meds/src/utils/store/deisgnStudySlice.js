import { createSlice } from "@reduxjs/toolkit";

const designStudySlice = createSlice({
  name: "designStudy",
  initialState: {
    basicDetails: {},
    studyDaysData: [],
  },
  reducers: {
    addDetails: (state, action) => {
      state.basicDetails = action.payload;
    },
    addStudyDaysData: (state, action) => {
      state.studyDaysData = [...state.studyDaysData, action.payload];
    },
  },
});

export const { addDetails, addStudyDaysData } = designStudySlice.actions;
export default designStudySlice.reducer;
