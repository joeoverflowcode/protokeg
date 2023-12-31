import React from 'react'
import Cropped from '../assets/cropped.png'
import Bio from './Bio'
import TypeWords from './TypeWords'
import Button from './Button'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import Sidenav from './Sidenav'
import NewButton from './NewButton'


function MobileView() {

  return (
      <div className='sm:hidden h-screen w-full flex flex-col bg-gradient-radial from-slate-700 via-slate-800 to-slate-950'>

            <div className='flex flex-col h-full w-full items-center justify-end'>

              <Bio 
                className='font-bold text-gray-200 text-5xl'
                textColor=""/> 
    
              <TypeWords 
              repeat={1}
                className='text-gray-200 text-3xl'/>

              {/* <Button
              className='bg-gradient-to-b from-blue-900 to-gray-800 shadow-md rounded-3xl cursor-pointer hover:scale-110 ease-in duration-200'
              href=''
              text='CONTACT'
              tStyle='text-white m-2 flex font-bold tracking-widest'/> */}
              <NewButton />

              {/* <div className="w-full h-[70%] bg-no-repeat bg-contain bg-center bg-[url('../src/assets/cropped.png')]" >
                </div> */}
                <img className='max-h-[80%] mt-4' src={Cropped} alt=''/>
<MobileFooter />
        
            </div>
          </div>   
      
    )
  }

export default MobileView