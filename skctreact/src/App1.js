import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Home from './Home/Home1'

const App1 = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        </Route>
        </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App1