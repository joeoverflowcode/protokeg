import React from 'react'
import Cropped from '../assets/cropped.png'
import Bio from './Bio'
import TypeWords from './TypeWords'
import Button from './Button'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import Sidenav from './Sidenav'


function MobileView() {

  return (
    <>
      {/* <Sidenav 
        iconColor={'text-white'}
        /> */}

          <div className='sm:hidden w-screen h-screen flex flex-col justify-end bg-gradient-radial from-slate-600 via-slate-700 to-slate-900'>

            <div className='flex flex-col items-center'>

              <Bio 
                className='font-bold text-gray-200 text-4xl'
                textColor=""/> 
    
              <TypeWords 
              repeat={1}
                className='text-gray-200 text-xl font-bold'/>

              <Button
              className='w-[200px] rounded-full p-2 m-2 shadow-gray-800 shadow-lg bg-gray-200 border-2 border-zinc-800'
              text="Contact"/>

              <img 
                  className="box-shadow-sm"
                  src={Cropped}/>

              <MobileFooter
              className="text-gray-300 flex-col-reverse
        bg-gray-900
              "/>
              {/* <Footer /> */}
        
            </div>
          </div>   
      </>
    )
  }

export default MobileView