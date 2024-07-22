import React from 'react'
import log1 from "../Images/Skct logo 1.png"
import { useNavigate } from 'react-router-dom';
const Login = () => 
{
  
  const navigate=useNavigate()
  const loginClick=() =>
  {
    alert("Login Successfully")
  navigate("/Home")
  }
  const navigate1=useNavigate()
  const SigClick = () =>
  {
  navigate1("/")
  }
  const handleChange = (e) =>
  {
    console.log(e.target.value)
  }
  const msg = () =>
  {
    alert("Successfully Login")
  }

  return (
    <div>
      <center>
     <h1><u>Login</u></h1>
      <img src ={log1}
      height={50}></img>
      <form>
        <label>Username </label>
        <input  onChange={handleChange}type="text" placeholder='Enter Your UserName' ></input>
        <br></br>
        <br></br>
        <label>Password: </label>
       <span title = "Atleast 8 letters" ><input type="password "placeholder='Enter Your Password'></input></span>
        <br></br>
       <h5> Newuser?< a href  =" "onClick={SigClick}>Signup</a></h5>
       
        <button onClick={loginClick}>Submit</button>
      </form>
      
      </center>
    </div>
  )
}

export default Login;