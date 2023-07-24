import React from 'react'
import { Link } from'react-router-dom'
import styles from './header.css'

const index = () => {
  return (
    // <div>
    //     <ul>
    //     <Link to="/login">
    //        <button>login</button>
    //       </Link>
    //       <Link to="/signup">
    //        <button>signin</button>
    //       </Link>
    //     </ul>
    // </div>
    <div className='header'>
         <img
            src={require("../../assets/logo-black.png")}
            alt="logo"
            className='logo_img'
          />
          <ul className='mainMenu'>
          <Link className='link_txt' to="/">
            PRIME MEMBERSHIP
          </Link>
          
          <Link className='link_txt' to="/views">
            BOOKING
          </Link>
          <Link className='link_txt' to="/about">
            PRICE
          </Link>
          <Link className='link_txt' to="/contact">
            ABOUT US
          </Link>
          <Link className='link_txt' to="/contact">
            SIGN IN
          </Link>
        </ul>
        
    </div>
  )
}

export default index