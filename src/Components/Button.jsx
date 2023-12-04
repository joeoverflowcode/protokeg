import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'

function Button({text, className, tStyle, href}) {
  
    const defaultButtonStyle= `flex flex-col items-center w-[75%] ${className}`

    const textStyle= `${tStyle}`


    return (

  <div className={defaultButtonStyle}>
  <a href={href}
  className=''> 
  {/* <AiOutlineProject size={25}/> */}
  <span className={textStyle}>{text}</span></a>
  </div>
    )
}

export default Button