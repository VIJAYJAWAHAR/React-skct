import React from 'react'
import logo from "../Images/skct flower logo.png"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
    const handleClick = () => {
    navigate("/Login")
  }
  
    
  return (
    <div>
       <center>
      <h5>Signup</h5>
       <img src={logo} height={50}></img>
      <form>
       <label>Fname: </label>
       <input type="text"></input>
       <br></br>
       <br></br>
       <label>Lname : </label>
       <input type="text"></input>
       <br></br>
       <br></br>
       <label>Mobile no : </label>
       <input type="text"></input>
       <br></br>
       <br></br>
       <label>Username : </label>
       <input type="text"></input>
       <br></br>
       <br></br>
       <label>Password: </label>
       <input type="password"></input>
       <br></br>
       <br></br>
       <button onClick={handleClick}>Submit</button>
     </form>
     </center>
    
     </div>
  )
}

export default Signup;