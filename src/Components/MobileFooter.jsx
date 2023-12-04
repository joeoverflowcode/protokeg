import React from 'react'
import Social from './Social'


function MobileFooter({className}) {

  const defaultStyle = `h-[7%] text-white w-screen flex flex-col items-center md:items-end md:px-10 ${className}`


  return (


        <footer className={defaultStyle}>
    
            <div
            className=''
            >&copy; 2023 Joe Aguado Development</div>
    
            <Social 
            size={25}/>
    
      </footer>
    )
    }
    

export default MobileFooter