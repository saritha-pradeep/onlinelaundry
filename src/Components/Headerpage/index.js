import React from 'react'
import { Link } from'react-router-dom'
import styles from './headerpage.css'
import { AiOutlineHome } from 'react-icons/ai'

const Header2 = () => {
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
    <div className='header2'>
         <img
            src={require("../../assets/download-removebg-preview.png")}
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
          <Link className='link_txt' to="/pricing">
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

export default Header2