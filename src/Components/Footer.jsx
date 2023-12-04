import React from 'react'

import Social from './Social';
function Footer() {
  return (
    <footer className="
       flex sm:justify-between sm:px-10 sm:p-2
    ">

        <div
        className=''
        >&copy; 2023 Joe Aguado Development</div>

        <Social 
        size={28}/>

  </footer>
)
}


export default Footer