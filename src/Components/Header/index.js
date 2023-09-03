import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.css";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Firebase/config";
import { alterReducer } from "../../Screens/Login/reducer";
import { toastController } from "../../Components/ToastWidget";
const Header = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLoggedIn = state.loginReducer.isLoggedIn;
  const onLogout = () => {
    auth.signOut().then((e) => {
      dispatch(alterReducer({ isLoggedIn: false, user: {} }));
      toastController.success('Logout Successfull')
    });
  };
  return (
    <div className="header">
      <img
        src={require("../../assets/download-removebg-preview.png")}
        alt="logo"
        className="logo_img"
      />
      <ul className="mainMenu">
        {isLoggedIn&&<Link className="link_txt" to="/dashboard">
          DASHBOARD
        </Link>}
        <Link className="link_txt" to="/booking">
          BOOKING
        </Link>
        <Link className="link_txt" to="/pricing">
          PRICE
        </Link>
        <Link className="link_txt" to="/contact">
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
    </div>
  );
};

export default Header;
