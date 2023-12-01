import React from 'react'
import MobileFooter from './MobileFooter'
import Image from '../assets/HeroNoBG.png'
import Sidenav from './Sidenav'
import Bio from './Bio'
import TypeWords from './TypeWords'
import Button from './Button'
import Quote from './Quote'


function Test() {


  return (
    <div className='sm:block hidden'>

      <div className='w-screen h-screen flex flex-col justify-end bg-gradient-radial from-slate-600 via-slate-700 to-slate-900'>

        <Sidenav />
<div className='absolute w-[500px] h-[500px] flex flex-col items-center justify-between right-0 mb-40'>

<div>
        <Quote className='text-white text-4xl' />
</div>

<div className='flex flex-col items-center'>

        <Bio  className='text-white font-sans'/>
        <TypeWords className='text-white font-sans'/>
        <Button className="w-[200px]"text='Contact'/>
</div>


</div>
        <img src={Image}/>
<MobileFooter className=""/>
    </div>
    </div>
  )
}

export default Test