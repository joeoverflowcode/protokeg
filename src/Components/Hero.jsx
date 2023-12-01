import React from 'react'
import heroImage from '../assets/DSC04562.jpeg'
import smaller from '../assets/smaller.jpeg'
import square from '../assets/square.jpeg'
import {TypeAnimation} from 'react-type-animation'
import {
  FaLinkedinIn, 
  FaGithub,
  FaGoogle,
  FaVimeo,
  FaVimeoV,
  FaYoutube
} from 'react-icons/fa'

const Hero = () => {

  const isMobile = window.innerWidth < 768;

  return (
    <div className="hero
    w-full
    h-screen
    flex 
    flex-col">


      <div className='image mt-8 flex justify-center'>
      <img
        src={isMobile ? square : heroImage}
        className={`max-w-[75%] border-4 border-black rounded-full ${isMobile ? 'lg:hidden' : 'lg:block'}`}
        alt="/"
        />
        </div>


        <div className='text mt-2 mx-8 flex flex-col lg:flex-grow'>

          <div className='
            flex 
            flex-col 
            lg:mt-0
            flex-grow'>

            <h2 className='sm:text-5xl text-3xl text-stone-800'>
              My name is </h2>
              <h1 className='sm:text-5xl text-4xl font-bold text-stone-800'>
                Joe Aguado
              </h1>
            
            <h2 className='flex align-center sm:text-3xl text-2xl pt-2 text-slate-800'>
              I'm a
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'Programmer',
                  1500,
                  'Full Stack Engineer',
                  1500,
                ]}
                wrapper="h3"
                speed={2}
                cursor={true}
                style={{ fontSize: '2.0', paddingLeft: '4px' }}
                repeat={Infinity}
                />
            </h2>
            <div className='flex justify-between pt-4 max-w-[300px]'>
              <FaGoogle className="cursor-pointer" size={30}/>
              <FaLinkedinIn className="cursor-pointer" size={30}/>
              <FaGithub className="cursor-pointer" size={30}/>
              <FaVimeoV className="cursor-pointer" size={30}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
