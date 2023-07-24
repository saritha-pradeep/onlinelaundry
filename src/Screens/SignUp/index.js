import React,{useState}from 'react'
import {Link, Navigate} from'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { db,auth } from '../../Firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate,useNavigation } from 'react-router-dom'
import "./signup.css"

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
                        .catch((error)=>{setErrorMsg(error.message)});
                        })
                       .catch((error)=>{
                            if(error.message == 'Firebase error: (auth/invalid-email)')
                            {
                                setErrorMsg('Please fill all required fields');      
                            }
                            if(error.message == 'Firebase error: (auth/email-already-in-use)')
                            {
                                setErrorMsg('User already exists');
                            }
                       })
                  
                    }
    
  return (
    <div><div className= 'signup-container'>
    <form className= 'signup-form' onSubmit={handleSubmit}>
        <p>Create Account</p>
      
            <div className='success-msg'>
            {successMsg}
            </div>
            {errorMsg && <>
            <div className='error-msg'>
                {errorMsg}
            </div></>
            
            }
        <label>Your Name</label>
        <input onChange={(e)=>setUserName(e.target.value)} 
          type='text' placeholder='First and last name'/>
        <label>Your Name</label>
        <input onChange= {(e)=>setPhonenumber(e.target.value)}
          type="tel" placeholder= "Mobile Number" />
        <label>Email</label>
        <input onChange= {(e)=>setEmail(e.target.value)} 
          type= "email" placeholder= "Enter your email" />
        <label>Password</label>
        <input onChange={(e) =>setPassword(e.target.value)} 
          type="password" placeholder="Enter your password" />
        <label>Address</label>
        <textarea onChange={(e) => setAddress (e.target.value)} placeholder= "Enter your address"></textarea>
        <button type= "submit">Sign up</button>
        <div>
     <span>Already have an account?</span>
     <Link to='/login'>Sign In</Link>
</div>

     </form>
</div>
</div>
  )
}

export default SignUp