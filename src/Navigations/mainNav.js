import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
function MainNav(params) {
  return (
    <NavigationProvider>
      <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </NavigationProvider>
  );
}
export default MainNav;
