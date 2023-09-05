
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Firebase/config";
import { alterReducer } from "../../Screens/Login/reducer";
import { toastController } from "../../Components/ToastWidget";
import MobileMenu from "./MobileMenu";
import "./header.css"

const Header = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLoggedIn = state.loginReducer.isLoggedIn;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onLogout = () => {
    auth.signOut().then((e) => {
      dispatch(alterReducer({ isLoggedIn: false, user: {} }));
      toastController.success("Logout Successful");
    });
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <img
        src={require("../../assets/download-removebg-preview.png")}
        alt="logo"
        className="logo_img"
      />
      <ul className="mainMenu">
        {isLoggedIn && (
          <Link className="link_txt" to="/dashboard">
            DASHBOARD
          </Link>
        )}
        <Link className="link_txt" to="/booking">
          BOOKING
        </Link>
        <Link className="link_txt" to="/pricing">
          PRICE
        </Link>
        <Link className="link_txt" to="/about">
          ABOUT US
        </Link>
        <Link
          className="link_txt"
          to="/login"
          onClick={() => isLoggedIn && onLogout()}
        >
          {isLoggedIn ? "LOG OUT" : "SIGN IN"}
        </Link>
        <Link to="/" className="link_txt">
          <AiOutlineHome size={25} />
        </Link>
      </ul>


      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
      )}
    </div>
  );
};

export default Header;
