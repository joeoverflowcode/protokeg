import React from 'react'
import MobileFooter from './MobileFooter'
import Image from '../assets/DSC04562.jpeg'
import Sidenav from './Sidenav'
import Bio from './Bio'
import TypeWords from './TypeWords'
import Button from './Button'
import Quote from './Quote'
import MonoImage from '../assets/HeroMono.png'


function NewView() {


  return (
    <>

            {/* <Sidenav /> */}

    <div className="sm:block hidden w-screen h-screen">

      {/* <div className=''> */}


        {/* <img className='h-full w-full top-0 object-cover object-left'
        src={MonoImage}
        src={Image}
        /> */}

<div className="
bg-[url('../src/assets/DSC04562.jpeg')]
 w-full h-full bg-no-repeat bg-cover flex flex-col items-end">

        <div className='h-full flex flex-col-reverse justify-evenly sm:w-[250px] md:w-[400px] sm:mr-8 md:mr-4 lg:mr-8 lg:mt-10 '>

                <div className='w-full sm:mr-4'>
                        <Quote className='text-gray-600 sm:text-1xl md:text-2xl font-serif'
                        
                         />
                </div>


                <div className='w-full flex flex-col mt-20'>

                        <div className='from-gray-50 via-gray-100 to-gray-300 bg-gradient-to-b bg-clip-text text-transparent w-full flex flex-col items-start'>

                        <Bio  className='font-sans font-bold sm:text-3xl md:text-4xl lg:text-5xl'/>
                        <TypeWords repeat={2} className='pl-2 font-sans font-bold sm:text-2xl md:text-2xl lg:text-3xl'/>

                        </div>

                        <Button className="sm:w-[150px] md:w-[200px] bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                        text-white rounded-full shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 lg:mx-6 md:text-xl lg:text-xl
                        " text='Contact'/>
                </div>

        </div>


</div>


    </div>




    {/* </div> */}
      </>
      )
}

export default NewView