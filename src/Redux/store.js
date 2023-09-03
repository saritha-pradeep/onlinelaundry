import { configureStore } from "@reduxjs/toolkit";
import { DetailSlice } from "../Screens/Pricing/reducer";
import { HomeSlice } from "../Screens/Home/reducer";
import { BookingSlice } from "../Screens/Booking/reducer";
import { LoginSlice } from "../Screens/Login/reducer";

export const store = configureStore({
  reducer: {
    HomeReducer: HomeSlice.reducer,
    DetailReducer: DetailSlice.reducer,
    bookingReducer:BookingSlice.reducer,
    loginReducer:LoginSlice.reducer
  },
});
