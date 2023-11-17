import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Social from './Social.jsx'
import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube
  } from 'react-icons/fa'

  
  function Bio({textColor, className}) {

    const defaultBioStyle =`flex flex-col items-center ${className}`

  return (

<div className={defaultBioStyle} >

          <div 
          style={{color: textColor}}
          className=''>


              <h1 className='sm:text-5xl text-5xl font-bold'>
                Joe Aguado
              </h1>
            
            <h2 className='sm:text-3xl text-2xl pt-2'>

              <TypeAnimation
                sequence={[
                  'Web Developer',
                  500,
                  'Programmer',
                  500,
                  'Full Stack Engineer',
                  500,
                ]}
                // wrapper=''
                speed={60}
                cursor={true}
                style={{ fontSize: '2.0', paddingLeft: '4px' }}
                repeat={1}
                />
            </h2>
          </div>
          </div>

  )
}

export default Bio