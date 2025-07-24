import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png'
 import netflix_spanner from '../../assets/netflix_spinner.gif'
import {login,signup} from '../../firebase.js'

const Login = () => {

  const[signState,setSignState]=useState("Sign In");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setloading]=useState(false);
 const user_auth=async(event)=>{
  event.preventDefault();
  setloading(true)
      if(signState=="Sign In") 
      {
    await login(email,password);
      }
      else{
   await signup(name,email,password);
      }
      setloading(false);
    }
  return (
    loading? <div className='loading-spinner'><img src={netflix_spanner} alt="" /></div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {
            signState==="Sign Up"? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name' />:<></>
          }
           
           <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
           <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
           <button onClick={user_auth} type='submit'>{signState}</button>
           <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
           </div>
        </form>
        <div className="form-switch">
          {signState=="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>SignUp Now</span></p>:<p>Already have an Account? <span onClick={()=>{setSignState("Sign In")}}>SignIn Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login