import React from 'react'
import skct from "../Images/Skct logo.png"
import nav from "../Images/navigationbackground.jpeg"

const Navgat = () => {
  return (
    <div>
       
        <img src={skct}height={50}width={1200}style={{backgroundImage:`URL(${nav})`}}></img>
    </div>
  )
}

export default Navgat