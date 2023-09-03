import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  shopList: [],
  sections: [
    { tabname: "address", active: false },
    { tabname: "Item selection", active: false },
    { tabname: "Collection and Delivery", active: false },
    { tabname: "Contact Details", active: false },
  ],
  selectedShopDetails: {},
  deliveryDetails: {},
  cart: [],
  currentIndex: 0,
  contactDetails: {},
  totalPrice: 0,
};

const BookingSlice = createSlice({
  name: "BookingSlice",
  initialState,
  reducers: {
    alterReducer: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeSection: (state, action) => {
      return {
        ...state,
        sections: state.sections.map((e, i) => {
          if (i === action.payload?.index) {
            return { ...e[i], ...action.payload.data };
          }
          return e;
        }),
      };
    },
    updateCart: (state, action) => {
      return {
        ...state,
        cart: action.payload.cart,
        totalPrice: action.payload.totalPrice,
      };
    },
  },
});
const { alterReducer, changeSection, updateCart } = BookingSlice.actions;
export { BookingSlice, alterReducer, changeSection, updateCart };
