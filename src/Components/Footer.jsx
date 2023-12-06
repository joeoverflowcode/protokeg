import React from 'react'

import Social from './Social';
function Footer() {
  return (
    <footer className="flex flex-col text-center sticky bottom-0">

        <div
        className='md:hidden block flex-col items-center sticky bottom-0 z-50'
        >&copy; 2023 Joe Aguado Development

        <Social 
        size={28}/>
        </div>

<div className='md:block hidden sticky bottom-0 z-50'>
<div className='flex justify-between p-2 mx-4'
        >&copy; 2023 Joe Aguado Development

        <Social 
        size={28}/>
        </div>
</div>



  </footer>
)
}


export default Footer