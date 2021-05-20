import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    // mail initial state
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload
    },
    openSendMessage: (state) => {
      // if you get the openMessage, set state to true
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      // or to false
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectedMail } = mailSlice.actions;

// to pull from the data layer
// we are going to get some awesome data from this layer from here
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
