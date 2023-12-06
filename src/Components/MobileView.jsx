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
      <div className='sm:hidden h-full flex flex-col '>

            <div className='flex flex-col h-full items-center bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500'>

              <Bio 
                className='font-bold text-gray-800 text-4xl'
                textColor=""/> 
    
              <TypeWords 
              repeat={1}
                className='text-gray-800 text-xl font-bold'/>

              <Button
              className='bg-gradient-to-b from-blue-900 to-gray-800 shadow-md rounded-3xl cursor-pointer hover:scale-110 ease-in duration-200'
              href=''
              text='CONTACT'
              tStyle='text-white m-2 flex font-bold tracking-widest'/>

              <div className="w-full h-full bg-cover shadow-lg bg-no-repeat bg-center" style={{backgroundImage: 'url(../src/assets/cropped.png)' }}>
                
                </div>

        
            </div>
          </div>   
      
    )
  }

export default MobileView