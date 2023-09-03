import { createSlice } from "@reduxjs/toolkit";
const initialState = {
isLoading:false,
isLoggedIn:false,
user:{}
};

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    alterReducer: (state, action) => {
      return { ...state, ...action.payload };
    },
    
  },
});
const { alterReducer } = LoginSlice.actions;
export { LoginSlice, alterReducer };
