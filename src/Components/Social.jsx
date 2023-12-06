import React from 'react'
import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube
  } from 'react-icons/fa'

function Social({size}) {
  return (
    <div 
    className='flex sm:justify-center'
    >

<a href='mailto:aguado.joe@gmail.com?subject=Work' className='cursor-pointer flex hover:text-blue-600'>

   <FaGoogle className=" ml-4" size={size}/> 
   <span className='pl-1'>GMail</span>
</a>



   <a href='https://www.linkedin.com/in/joe-aguado-3a455311b/' className='cursor-pointer flex hover:text-blue-600'>

   <FaLinkedinIn className=" ml-4" size={size}/> <span className='pl-1'>LinkedIn</span>
   </a>

   <a href='https://github.com/joeoverflowcode/' className='cursor-pointer flex hover:text-blue-600'>

<FaGithub className=" ml-4" size={size}/><span className='pl-1'>GitHub</span>
   </a>


<a href='https://vimeo.com/user3712098' className='cursor-pointer flex hover:text-blue-600'>

   <FaVimeoV className=" ml-4" size={size}/> <span className='pl-1'>Vimeo</span>
</a>
  </div>
  )
}

export default Social