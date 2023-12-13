import React from 'react'
import TopNav from '../Components/TopNav'
import MobileFooter from '../Components/MobileFooter'
import Footer from '../Components/Footer'
import Bio from '../Components/Bio'
import TypeWords from '../Components/TypeWords'
import Button from '../Components/Button'
import Quote from '../Components/Quote'
import MobileView from '../Components/MobileView'
import FullView from './FullView'
import Sample from '../Components/Sample'



function ShakeShack() {

  return (

  



    <div className='flex flex-col h-screen'>
{/* <Sample/> */}
    <MobileView/>
    <FullView />

    {/* <div className=' flex-1 bg-blue-200 flex items-center justify-center'>

      <div className='w-full h-full bg-cover bg-no-repeat' style={{backgroundImage: 'url(../src/assets/Hero1920.png)' }}>

        <div className='w-full h-full flex'>



        <div className='w-[60%] h-full'>

        </div>

        <div className='w-[40%] h-full flex flex-col justify-evenly'>
<div className='flex flex-col w-full items-center  from-black via-gray-950 to-gray-500 bg-gradient-to-b bg-clip-text text-transparent'>
    <Bio 
    className='text-5xl font-bold'/>
    <TypeWords
    className='text-3xl'
    repeat={3}/>

    <Button 
    className='bg-gradient-to-b from-blue-900 to-gray-800 shadow-md rounded-3xl cursor-pointer hover:scale-110 ease-in duration-200'
    href=''
    text='CONTACT'
    tStyle='text-white m-2 flex font-bold tracking-widest'
    />
</div>
<div className='h-[20%]'>
  

        </div>
</div>
        </div>



      </div>
    </div> */}


  </div>
//  </div>
  )
}

export default ShakeShack