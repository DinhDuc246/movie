import { createSlice } from "@reduxjs/toolkit";

export const globalLoadingSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    globalLoadingSlice: false,
  },
  reducers: {
    setGlobalLoading: (state, action) => {
      state.appState = action.payload;
    },
  },
});
export const { setGlobalLoading } = globalLoadingSlice.actions;

export default globalLoadingSlice.reducer;
