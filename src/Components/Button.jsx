import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'

function Button({text, className}) {
  
    const defaultButtonStyle= `flex justify-center rounded-full border-2 shadow-sm bg-gray-100 shadow-gray-600 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-50 ${className}`
  
    return (
  
  <a href="#Main"
  className={defaultButtonStyle}> 
  {/* <AiOutlineProject size={25}/> */}
  <span className='pl-4'>{text}</span></a>
    )
}

export default Button