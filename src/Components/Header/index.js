import React from 'react'
import { Link } from'react-router-dom'
import styles from './header.css'
import { AiOutlineHome } from 'react-icons/ai'

const Header = () => {
  return (
    
    <div className='header'>
         <img
            src={require("../../assets/download-removebg-preview.png")}
            alt="logo"
            className='logo_img'
          />
          <ul className='mainMenu'>
          <Link className='link_txt' to="/">
            PRIME MEMBERSHIP
          </Link>
          
          <Link className='link_txt' to="/booking">
            BOOKING
          </Link>
          <Link className='link_txt' to="/about">
            PRICE
          </Link>
          <Link className='link_txt' to="/contact">
            ABOUT US
          </Link>
          <Link className='link_txt' to="/login">
            SIGN IN
          </Link>
          <Link to='/' className='link_txt'>
          <AiOutlineHome size={25} />
        </Link>
          
        </ul>
        
    </div>
  )
}

export default Header