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

<a href='#Google' className='cursor-pointer flex'>

   <FaGoogle className=" ml-4" size={size}/> 
   <span className='pl-1'>Google</span>
</a>



   <a href='#LinkedIn' className='cursor-pointer flex'>

   <FaLinkedinIn className=" ml-4" size={size}/> <span className='pl-1'>LinkedIn</span>
   </a>

   <a href='https://github.com/joeoverflowcode/' className='cursor-pointer flex'>

<FaGithub className=" ml-4" size={size}/>    <span className='pl-1'>GitHub</span>
   </a>


<a href='#Vimeo' className='cursor-pointer flex'>

   <FaVimeoV className=" ml-4" size={size}/> <span className='pl-1'>Vimeo</span>
</a>
  </div>
  )
}

export default Social