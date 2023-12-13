import React from 'react'
import MonoRace from '../assets/MonoRace.png'
import Tutor from '../assets/DSC05495.jpeg'
import Example from '../assets/DSC05407.jpeg'
import Awards from '../assets/0E9A6835.jpeg'
import Face from '../assets/DSC05418.jpeg'
import BTS from '../assets/0E9A6404.jpeg'
import Notes from '../assets/Notes.png'
import Graduation from '../assets/IMG_4103.jpeg'
import Surf from '../assets/G0080783.jpg'
import MonoSurf from '../assets/joe 2.jpeg'
import Button from '../Components/Button'
import Quote from '../Components/Quote'
import NewButton from '../Components/NewButton'

function About() {
  return (
    <>
   <div className='md:hidden block bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500'>

<div className='flex flex-col sm:flex items-center mt-8'>

<img className='max-w-[60%] m-auto border-2 border-black' src={MonoSurf}/> 
<h4 className='flex flex-col text-center items-center m-auto'>Oaxaca, Puerto Escondido 2025</h4>     
</div>

<div className='flex flex-col w-full m-4'>
<h1 className='text-4xl w-full font-bold m-1 text-black tracking-tight'><span className='pl-1 pt-1 pr-1 border-black border'>A</span>bout Joe</h1>
<h2 className='text-2xl flex w-full m-1 tracking-wider'>Full Stack <span className='text-blue-800 font-bold tracking-tight pl-1'> Web Developer</span></h2>
</div>

<div className='flex flex-col m-4'>
<p className='text-xl m-2 text-black p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
      </p>

      <p className='text-xl m-2 text-black p-1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
      </p>
</div>
<div className='flex m-8'>

<NewButton/>
</div>



</div>

<div className='md:block hidden bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500 w-full m-auto h-full'>

<div className='flex h-full '>

<div className='flex flex-col max-w-[40%] justify-center p-8'>

<img className='max-w-[400px] border-2 border-black' src={MonoSurf}/> 
<h4>Oaxaca, Puerto Escondido 2021</h4>     
</div>
<div className='flex flex-col justify-center'>

<div className='flex flex-col max-w-[40%]'>
<h1 className='text-4xl font-bold m-1 text-black tracking-tight'><span className='pl-1 pt-1 pr-1 border-black border'>A</span>bout Joe</h1>
<h2 className='text-2xl m-1 tracking-wider'>Full Stack <span className='text-blue-800 font-bold tracking-tight'> Web Developer</span></h2>
</div>

<div className='flex flex-col max-w-[80%]'>
<p className='text-xl m-2 text-black p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
      </p>

      <p className='text-xl m-2 text-black p-1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
      </p>
</div>
<div className='flex'>

<NewButton/>
</div>
</div>
</div>

</div>
  
    </>
  )
}

export default About