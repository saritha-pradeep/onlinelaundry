import React,{useState}from 'react'
import {Link, Navigate} from'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { db,auth } from '../../Firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate,useNavigation } from 'react-router-dom'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer"
import "./signup.css"
import Header2 from '../../Components/Headerpage'
import {AiFillHome} from 'react-icons/ai'
const SignUp = () => 
{ 
    const [username,setUserName] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [initialcartvalue,setInitialCartValue] = useState(0);
    const Navigate = useNavigate();
    const [errorMsg,setErrorMsg]= useState("")
    const [successMsg,setSuccessMsg] = useState("")

                    const handleSubmit =(e)=>{
                        e.preventDefault();
                        createUserWithEmailAndPassword(auth,email,password)
                        .then((userCredential)=>{
                            const user = userCredential.user;
                            const intialcartvalue = 0;
                            console.log(user);
                        
                            addDoc(collection(db, "users"), {
                                username: username, email: email, phonenumber:
                                phonenumber, password: password, cart: initialcartvalue,address: address,uid: user.uid
                                 }).then(()=>{
                            setSuccessMsg('New user added successfully, You will now be  automatically redirected to login page.')
                            setUserName('');
                            setPhonenumber('');
                            setEmail('');
                            setPassword('');
                            setErrorMsg('')
                                Navigate('/login');
                        })
                        })
                       .catch((error)=>{
                       setErrorMsg('Invalid user name or password')
                       })
                  
                    }
    
  return (
    <div>
      <Header2 />
      <div className= 'signup-container'>
          <form className= 'signup-form' onSubmit={handleSubmit}>
              <h2>Create Account</h2>
             
                  <div className='success-msg'>
                  {successMsg}
                  </div>
                  {errorMsg && <>
                  <div className='error-msg'>
                      {errorMsg}
                  </div></>
                  
                  }
                  <div className='form-field'>
                    <label>Your Name</label>
                    <input required onChange={(e)=>setUserName(e.target.value)} 
                      type='text' placeholder='First and last name'/>
                 </div>
                  <div className='form-field'>
                    <label>Phone</label>
                    <input onChange= {(e)=>setPhonenumber(e.target.value)}
                    type="tel" placeholder= "Mobile Number" />
                  </div>
                  <div className='form-field'>
                  <label>Email</label>
                  <input onChange= {(e)=>setEmail(e.target.value)} 
                    type= "email" placeholder= "Enter your email" />
                  </div>
                  <div className='form-field'>
                  <label>Password</label>
                   <input onChange={(e) =>setPassword(e.target.value)} 
                    type="password" placeholder="Enter your password" />
                  </div>
                  <div className='form-field'>
                  <label>Address</label>
                   <textarea onChange={(e) => setAddress (e.target.value)} placeholder= "Enter email address" className='address'></textarea>
                   </div>
                  <button type= "submit">Sign up</button>
                  
             
                    <div className='bottom'>  
                       <span>Already have an account?</span>
                       <Link to='/login'>Sign In</Link>
                    </div>

          </form>
    </div>
    <Footer />
</div>
  )
}

export default SignUp