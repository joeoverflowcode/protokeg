import React from 'react'
import image from '../assets/HeroNoBG.png'
import Bio from './Bio'
import Button from './Button'
import Hero from '../assets/Hero.png'
import cropped from '../assets/cropped.png'
import TypeWords from './TypeWords'
import Footer from './Footer'
import Quote from './Quote'
import MobileFooter from './MobileFooter'
import Sidenav from './Sidenav'

function NoBGHero() {

  return (
<>
    <Sidenav />

    <div className='sm:hidden w-screen h-full p-4 flex flex-col items-center'>


            <img 
            className=""
            src={cropped}/>
        </div>
  


   


<div className='sm:block hidden w-screen h-screen'>

    <div className='w-full h-full bg-gradient-radial from-slate-600 via-slate-700 to-slate-900 flex flex-col justify-end'>
        {/* <Sidenav/> */}

                    <div className='flex flex-col justify-evenly mx-8 items-end  h-full'>

                        <div className=''>

                            <Quote 
                                
                                className=''/>
                        </div>
                        <div>                            
                                    <Bio 
                                    textColor="white"/>

                                    <TypeWords />

                                    <Button 
                                    text="Contact"/>
                        </div>
                        
        <img className=' '
                src={image} />

                    </div>

            </div>


            <MobileFooter/>
            </div>
            {/* <Footer /> */}


        </>
  )
}

export default NoBGHero