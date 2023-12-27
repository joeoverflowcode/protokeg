import React from 'react'

import Social from './Social';
function Footer() {
  return (
    <footer className="flex flex-col items-center text-center sticky bottom-0 z-50">

        {/* <div
        className='md:hidden block flex-col items-center sticky bottom-0 z-50'
        >&copy; 2023 Joe Aguado Development

        <Social 
        size={28}/>
        </div> */}

<div className='md:block hidden w-full sticky bottom-0 z-50'>
<div className=' w-full flex justify-between p-1 mt-1 px-4'
        >&copy; 2023 Joe Aguado Development

        <Social 
        size={24}/>
        </div>
</div>



  </footer>
)
}


export default Footer