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
    className='flex m-1 sm:justify-center max-w-[200px]'
    >
    <FaGoogle className="cursor-pointer mx-4" size={size}/>
    <FaLinkedinIn className="cursor-pointer mx-4" size={size}/>
    <FaGithub className="cursor-pointer mx-4" size={size}/>
    <FaVimeoV className="cursor-pointer mx-4" size={size}/>
  </div>
  )
}

export default Social