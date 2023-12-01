import React from 'react'
import Social from './Social.jsx'
import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube
  } from 'react-icons/fa'

  
  function Bio({className}) {

    const defaultBioStyle =`flex flex-col ${className}`

  return (

<div className={defaultBioStyle}>

                Joe Aguado

          </div>

  )
}

export default Bio