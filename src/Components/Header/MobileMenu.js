// MobileMenu.js
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, closeMenu, isLoggedIn }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={closeMenu}>
        <AiOutlineClose size={24} />
      </button>
      <ul>
        <li>
          <Link to="/dashboard" onClick={closeMenu}>
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link to="/booking" onClick={closeMenu}>
            BOOKING
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={closeMenu}>
            PRICE
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMenu}>
            {isLoggedIn ? "LOG OUT" : "SIGN IN"}
          </Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>
            <AiOutlineHome size={25} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
