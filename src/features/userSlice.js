import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      // if you get the openMessage, set state to true
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// to pull from the data layer
// we are going to get some awesome data from this layer from here
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
