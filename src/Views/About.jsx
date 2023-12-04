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


function About() {
  return (
    <div className='flex flex-col items-center bg-gradient-radial from-slate-600 via-slate-700 to-slate-900'>

    <div className='w-[75%] [h-90%] flex flex-col items-center m-10 bg-white p-10'>
        <h1 className='text-4xl font-bold underline m-6'>About</h1>
<div className='w-full h-full flex justify-between m-4'>

<img className='w-[500px] border-8 border-black' src={MonoSurf}/>
    <p className='text-2xl p-4 m-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

</div>
<div className='w-full h-full flex justify-between m-4'>
{/* <img className='w-[600px]' src={Awards}/> */}

{/* <img className='w-[600px]' src={Example}/> */}
{/* <img className='w-[400px]' src={Face}/> */}
<p className='text-2xl p-4 m-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
</br>
Quis varius quam quisque id diam vel. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Senectus et netus et malesuada. Pellentesque pulvinar pellentesque habitant morbi. Quis auctor elit sed vulputate mi sit amet. Magna etiam tempor orci eu lobortis elementum nibh tellus. 

</p>
<img className='max-w-[500px] max-h-[500px] border-4 border-black m-4' src={MonoRace}/>


</div>

<div className='w-full h-full flex justify-between m-4'>

<img className='max-w-[400px] max-h-[600px] border-4 border-black m-4' src={Tutor}/>
    <p className='text-2xl p-4 m-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

</div>

{/* <img className='w-[900px]' src={BTS}/> */}
<img className='max-w-[700px] max-h-[500px] border-4 border-black m-4' src={Surf}/>


    </div>
    </div>
  )
}

export default About