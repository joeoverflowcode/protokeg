import Bio from '../Components/Bio'
import TypeWords from '../Components/TypeWords'
import Button from '../Components/Button'

import React from 'react'
import NewButton from '../Components/NewButton'


function FullView() {
  return (
    <div className='sm:block hidden flex-col h-full'>

    <div className='flex flex-col h-full'>
        <div className='h-full flex-1 bg-blue-200 flex items-center justify-center'>
      {/* Your Background Image */}
      <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('../src/assets/Hero1920.png')]">
        {/* Content Inside the Background */}
        <div className='w-full h-full flex'>

{/* <div className=''>
<Quote />
</div> */}


        <div className='w-[60%] h-full'>

        </div>

        <div className='w-[40%] h-full flex flex-col justify-evenly'>
<div className='flex flex-col w-full justify-center items-center'>
    <Bio 
    className='text-5xl font-bold'/>
    <TypeWords
    className='text-3xl'
    repeat={3}/>

    {/* <Button 
    className='bg-gradient-to-b from-blue-900 to-gray-800 shadow-md rounded-3xl cursor-pointer hover:scale-110 ease-in duration-200'
    href=''
    text='CONTACT'
    tStyle='text-white m-2 flex font-bold tracking-widest'
    /> */}
    <NewButton/>


    {/* <FillButton /> */}

</div>


<div className='h-[20%]'>
    {/* <div className='hidden lg:block lg:mx-20 border-2 border-white p-2 shadow-md'>

<Quote 
className='text-2xl tracking-wider text-white'
/>
</div> */}
        </div>
</div>
        </div>



      </div>
    </div>

    </div>
</div>
  )
}

export default FullView