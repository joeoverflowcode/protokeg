import React from 'react'
import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube
  } from 'react-icons/fa'

function Social() {
  return (
    <div 
    className='flex justify-between p-2 md:justify-center'
    >
    <FaGoogle className="cursor-pointer mx-2" size={30}/>
    <FaLinkedinIn className="cursor-pointer mx-2" size={30}/>
    <FaGithub className="cursor-pointer mx-2" size={30}/>
    <FaVimeoV className="cursor-pointer mx-2" size={30}/>
  </div>
  )
}

export default Social