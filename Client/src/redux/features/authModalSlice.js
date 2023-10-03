import { createSlice } from "@reduxjs/toolkit";

export const authModalOpen = createSlice({
  name: "AuthModal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});
export const { setAuthModalOpen } = authModalOpen.actions;

export default authModalOpen.reducer;
