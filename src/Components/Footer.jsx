import React from 'react'

import Social from './Social';
function Footer() {
  return (
    <footer className="z-10 fixed bg-gray-900 text-lime-50 
    flex bottom-0 w-full flex-col text-center md:pt-4 md:items-end md:px-10
    md:bg-gradient-to-b md:from-slate-300 md:to-slate-800
    ">

        <div>&copy; 2023 Joe Aguado Development</div>

        <Social />

  </footer>
)
}


export default Footer