import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Component from './Component/Component A';
import ComponentC from './Component/Component C';
import ComponentA from './Component/Component A';
import ComponentB from './Component/Component B';
import Componentclass from './Componentclass/Componentclass';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import State from './Componentclass/State';
import Home from './Home/Home1';
import CC1 from './CC1/First';
import First from './CC1/First';
import PropParent from './PropParent/PropParent';
import PropChild from './PropParent/PropChild';
import App1 from './App1';
import Navgat from './Navgation/Navgat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
