import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../Firebase/config";
import { collection, addDoc, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import "./login.css";
import Header2 from "../../Components/Headerpage";
import { toastController } from "../../Components/ToastWidget";
import { useDispatch } from "react-redux";
import { alterReducer } from "./reducer";
import { getSingleDocument } from "../../Firebase/functions";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        const _q=query(collection(db,'users'),where('uid','==',user.uid))
       const currentUser=await getSingleDocument({query:_q})
        dispatch(alterReducer({ isLoggedIn: true, user:currentUser[0] }));
        toastController.success("Login Successfull");
        navigate("/dashboard");
      })
      .catch((error) => {
        toastController.error("Ooops an error occured!", error);
      });
  };

  return (
    <div>
      <Header2 />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="form-field">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Sign In</button>

          <div className="bottom">
            <span>New Member?</span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
