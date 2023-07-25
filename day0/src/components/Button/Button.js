import React from 'react'

const Button = ({ showTime, time, buttonText}) => {
  return (
    <button  onClick={()=>showTime(!time)}>{buttonText}</button>
  )
}

export default Button