import React from 'react';
import heroImage from '../assets/DSC04562.jpeg';
import smaller from '../assets/smaller.jpeg';
import Hero from '../assets/Hero.png'
import square from '../assets/square.jpeg';
import Bio from './Bio';
import Quote from './Quote';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import Sidenav from './Sidenav';


import {
  FaLinkedinIn,
  FaGithub,
  FaGoogle,
  FaVimeoV,
} from 'react-icons/fa';
import Button from './Button';
import TypeWords from './TypeWords';
import NewButton from './NewButton';

const Sample = () => {


  return (
<>
{/* <Sidenav iconColor={'text-white'} />  */}


  <div className='sm:hidden w-screen h-screen p-4 flex flex-col items-center
  bg-gradient-radial from-slate-600 via-slate-700 to-slate-900'>

    <img 
    className="shadow-md w-[95%] border-8 border-gray-900 rounded-full"
    src={Hero}/>
        <div className='flex flex-col items-center text-center text-white'>
    <Bio 
    className='items-center text-5xl font-bold'
    textColor="white"/>
  <TypeWords 
  className='text-3xl'/>

  <div className='flex group mt-4'>

        <NewButton/>
      </div>
      </div>


  </div>

{/* 
<div className='sm:block hidden'>

    <div className='w-screen h-screen flex flex-col justify-end'>



      <div 
      className='absolute w-[500px] h-[500px] flex flex-col items-center justify-between top-0 right-0 mt-40'
      >

        <div>

        <Quote 
        className="font-serif"/>

        </div>
            
      <div
        className='flex flex-col items-center'
        >
        <Bio 
        className="font-bold"/>
        <TypeWords

          color='black'/>
        <Button 
      className='w-[200px] bg-zinc-300 font-bold text-black '
      text="Contact"/>
        </div>


        </div>
                <img
        className="h-full w-full top-0 object-cover object-left"
        src={heroImage} />
          <Footer/>


      </div>
      </div> */}
        </>

  )
}

export default Sample