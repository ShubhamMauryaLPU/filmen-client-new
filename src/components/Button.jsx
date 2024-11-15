import React from 'react'
import "./Button.css";

const Button = ({icon,name,color='#ffffff',bgColor='#ff3700',style}) => {
  return (
    <a href="" className="mainBtn" style={{color:color,backgroundColor:bgColor,...style}}>
      {icon} {name}
    </a>
  )
}

export default Button;
