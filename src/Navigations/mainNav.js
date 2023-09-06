import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Booking from "../Screens/Booking";
import Pricing from "../Screens/Pricing";
import DashBoard from "../Screens/DashBoard";
import About from "../Screens/About";



function MainNav(params) {
  return (
    <NavigationProvider>
      <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/about" element={<About/>} />
      
      </Routes>
    </NavigationProvider>
  );
}
export default MainNav;
