import { createSlice } from "@reduxjs/toolkit";

export const chartsSlice = createSlice({
  name: "charts",
  initialState: {
    activeButton: "6m",
  },
  reducers: {
    handleTimeFrameClick: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { handleTimeFrameClick } = chartsSlice.actions;
export default chartsSlice.reducer;
