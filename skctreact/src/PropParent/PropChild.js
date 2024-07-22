import React from 'react'

const PropChild = (props) => {
  return (
    <div>
      
        <h3>Good {props.data}</h3>
        <h3>My Name is {props.name}</h3>
        <h3>My RollNo {props.Roll}</h3>
        <h3>My Friend is {props.BF}</h3>
    </div>
  )
}

export default PropChild