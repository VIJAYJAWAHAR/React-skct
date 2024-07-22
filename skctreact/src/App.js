import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Home from './Home/Home1'
import SignInSide from './SignInSide/SignInSide'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSide/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        </Routes>
          </BrowserRouter>
          
    </div>
  )
}

export default App