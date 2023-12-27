import React from 'react'
import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube
  } from 'react-icons/fa'

function Social({size, className}) {

   const defaultStyle = `${className}`

  return (
    <div 
    className='flex sm:justify-center ' 
    >

<a href='mailto:aguado.joe@gmail.com?subject=Work Inquiry' className='cursor-pointer flex hover:text-blue-600 p-1'>

   <FaGoogle className="" size={size}/> 
   <span className='pl-1 hidden sm:block'>GMail</span>
</a>


   <a href='https://www.linkedin.com/in/joe-aguado-3a455311b/' className='cursor-pointer flex hover:text-blue-600 ml-4 p-1' target="_blank" rel="noopener noreferrer">

   <FaLinkedinIn className="" size={size}/> <span className='pl-1 hidden sm:block'>LinkedIn</span>
   </a>

   <a href='https://github.com/joeoverflowcode/' className='cursor-pointer flex hover:text-blue-600 ml-4 p-1' target="_blank" rel="noopener noreferrer">

<FaGithub className="" size={size}/><span className='pl-1 hidden sm:block'>GitHub</span>
   </a>


<a href='https://youtube.com/@JoeAguado?si=S0ngzFnurTO5voZu' className='cursor-pointer flex hover:text-blue-600 ml-4 p-1' target="_blank" rel="noopener noreferrer">

   <FaYoutube className="" size={size}/> <span className='pl-1 hidden sm:block'>Youtube</span>
</a>
  </div>
  )
}

export default Social