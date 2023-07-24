// import React, { useEffect } from 'react'
// import './login.style.module.css'
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const wrapper = document.querySelector('.wrapper');
//   const navigate=useNavigate()

// const handleSignup=()=>{
//   wrapper.classList.add('animate-signIn');
//   wrapper.classList.remove('animate-signUp');
//   navigate('/signup')
// }
// const handleSignIn=()=>{
//   wrapper.classList.add('animate-signUp');
//     wrapper.classList.remove('animate-signIn');
//     navigate('/signin')
// }
//   return (
//     <div>
//     <div class="wrapper">
//         <div class="form-wrapper sign-up">
//             <form action="">
//                 <h2>Sign Up</h2>
//                 <div class="input-group">
//                     <input type="text" required/>
//                     <label for="">Username</label>
//                 </div>
//                 <div class="input-group">
//                     <input type="email" required/>
//                     <label for="">Email</label>
//                 </div>
//                 <div class="input-group">
//                     <input type="password" required/>
//                     <label for="">Password</label>
//                 </div>
//                 <button type="submit" class="btn">Sign Up</button>
//                 <div class="sign-link">
//                     <p>Already have an account? <a href="" onClick={handleSignIn}>Sign In</a></p>
//                 </div>
//             </form>
//         </div>

//         <div class="form-wrapper sign-in">
//             <form action="">
//                 <h2>Login</h2>
//                 <div class="input-group">
//                     <input type="text" required/>
//                     <label for="">Username</label>
//                 </div>
//                 <div class="input-group">
//                     <input type="password" required/>
//                     <label for="">Password</label>
//                 </div>
//                 <div class="forgot-pass">
//                     <a href="#">Forgot Password?</a>
//                 </div>
//                 <button type="submit" class="btn">Login</button>
//                 <div class="sign-link">
//                     <p>Don't have an account? <a href="#" onClick={handleSignup}>Sign Up</a></p>
//                 </div>
//             </form>
//         </div>
//     </div>
//       </div>
//   )
// }

// export default Login

import React from 'react'
import './login.css'
const login = () => {
  return (
    <div className="f">
      login
      </div>
  )
}

export default login