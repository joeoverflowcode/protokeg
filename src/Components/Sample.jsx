import React from 'react';
import heroImage from '../assets/DSC04562.jpeg';
import smaller from '../assets/smaller.jpeg';
import Hero from '../assets/Hero.png'
import square from '../assets/square.jpeg';
import Bio from './Bio';
import {
  FaLinkedinIn,
  FaGithub,
  FaGoogle,
  FaVimeoV,
} from 'react-icons/fa';
import Button from './Button';

const Sample = () => {


  return (
<>
  <div className='sm:hidden p-4 flex flex-col'>

    <img 
    className="shadow-xl border-black border-8 rounded-full"
    src={Hero}/>
        <div>
    <Bio 
    textColor="rgb(0,2,1)"/>
    </div>
    <Button 
    text="My Work"/>
        <Button 
      className='bg-zinc-300 font-bold text-black '
    text="Contact"/>
  </div>


    <div className='sm:block hidden w-full h-screen'>
        <img 
        className="h-full w-full top-0 left-0 object-cover pb-20"
        src={heroImage} />

      {/* <div 
      className='absolute top-0 left-0 w-full h-full flex flex-col justify-start p-40'
      > */}
<div
className='absolute top-0 left-0 w-full h-full flex col p-40 justify-end'
>


        <Bio 
        textColor="white"/>
        </div>
        </div>


      {/* </div> */}

        </>

  )
}

export default Sample