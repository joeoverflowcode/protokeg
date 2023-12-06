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
function About() {
  return (
    <div>

    <div className='sm:block hidden'>

    <div className=' w-full h-full bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500 flex items-center p-20 justify-evenly'>

<div className='flex flex-col'>

<img className='max-w-[400px] border border-black' src={MonoSurf}/> 
<h4>Oaxaca, Puerto Escondido 2021</h4>     
</div>


<div className='max-w-[50%] h-full flex flex-col items-start justify-center m-auto'>

<Quote 
className='text-2xl p-2 m-2'
/>

 <h1 className='text-5xl font-bold m-1 text-black'>About Joe</h1>
 <h2 className='text-3xl m-2'>Full Stack <span className='text-blue-800 font-bold'> Web Developer</span></h2>

    <p className='text-xl m-2 text-black p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
      </p>
    

    <p className='text-xl m-2 p-1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


      <Button 
    className='bg-gradient-to-b from-blue-900 to-gray-800 shadow-md rounded-3xl cursor-pointer hover:scale-110 ease-in duration-200'
    href=''
    text='CONTACT'
    tStyle='text-white m-2 flex font-bold tracking-widest'
    />

  </div>

    </div>
    </div>

<div className='sm:hidden block h-full bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500 py-4'>


<div className='flex flex-col items-center py-4'>

<img className='max-w-[70%] m-auto border-2 border-black' src={MonoSurf}/> 
<h4>Oaxaca, Puerto Escondido 2021</h4>     
</div>

<div className='m-3 flex flex-col'>
<h1 className='text-4xl font-bold m-1 text-black tracking-tight'><span className='pl-1 pt-1 pr-1 border-black border'>A</span>bout Joe</h1>
<h2 className='text-2xl m-1 tracking-wider'>Full Stack <span className='text-blue-800 font-bold tracking-tight'> Web Developer</span></h2>
</div>

<div>
<p className='text-xl m-2 text-black p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
      </p>

      <p className='text-xl m-2 text-black p-1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
      </p>
</div>
<div className='flex items-center justify-center mb-8'>

<Button 
    className='bg-gradient-to-b from-blue-900 to-gray-800 shadow-md rounded-3xl cursor-pointer hover:scale-110 ease-in duration-200'
    href=''
    text='CONTACT'
    tStyle='text-white m-2 flex font-bold tracking-widest'
    />
    </div>
</div>
    </div>
  )
}

export default About