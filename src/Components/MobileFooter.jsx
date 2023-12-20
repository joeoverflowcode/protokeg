import React from 'react'
import Social from './Social'


function MobileFooter({className}) {

  const defaultStyle = `bottom-0 bg-gradient-to-b from-slate-900 to-slate-950 text-white w-screen flex flex-col items-center ${className}`


  return (


        <footer className={defaultStyle}>
    
            <div
            className=''
            >&copy; 2023 Joe Aguado Development</div>
    
            <Social 
            size={30}/>
    
      </footer>
    )
    }
    

export default MobileFooter