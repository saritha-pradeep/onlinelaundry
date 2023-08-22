import { createSlice } from "@reduxjs/toolkit";
const initialState = {
isLoading:false,
 address:{}
};

const BookingSlice = createSlice({
  name: "BookingSlice",
  initialState,
  reducers: {
    alterReducer: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
const { alterReducer } = BookingSlice.actions;
export { BookingSlice,alterReducer };
