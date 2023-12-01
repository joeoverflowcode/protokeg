import React from 'react'

import Social from './Social';
function Footer() {
  return (
    <footer className=" bg-gray-900 text-lime-50 bottom-0 w-full fixed
    flex flex-col text-center items-center sm:justify-end sm:items-end sm:px-10
    ">

        <div
        className=''
        >&copy; 2023 Joe Aguado Development</div>

        <Social 
        size={25}/>

  </footer>
)
}


export default Footer