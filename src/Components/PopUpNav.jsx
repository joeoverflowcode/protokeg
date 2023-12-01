import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react'

function PopUpNav() {

    const [showText, setShowText] = useState(false)
  return (
    <div className=''>
 <a
      href="#contact"
      className='p-2 relative'
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div className="flex items-center">
        <AiOutlineMail className="mr-2" />
        <span
          className={`absolute px-8 py-1 opacity-0 transition duration-300 ease-in-out ${showText ? 'opacity-100' : 'opacity-0'} ${showText ? 'visible' : 'invisible'}`}
        >
          Contact Section
        </span>
      </div>
    </a>
    <a href="#contact" className='p-2 relative'>
      <div className="flex items-center group">
        <AiOutlineMail className="mr-2" />
        <span className="absolute font-bold px-8 py-1 opacity-0 invisible transition duration-1000 ease-in-out group-hover:opacity-100 group-hover:visible">
          Contact Section
        </span>
      </div>
    </a>
    </div>
  )
}

export default PopUpNav