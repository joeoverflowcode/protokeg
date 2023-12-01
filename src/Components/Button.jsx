import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'

function Button({text, className}) {
  
    const defaultButtonStyle= `flex justify-center ${className}`
  
    return (
  
  <a href="#Main"
  className={defaultButtonStyle}> 
  {/* <AiOutlineProject size={25}/> */}
  <span className='font-bold'>{text}</span></a>
    )
}

export default Button