import React from 'react'


    function Project({href, source, alt, title, date}) {
        return  (

    <div className='relative flex items-center justify-center h-auto w-full hover:cursor group hover:bg-gray-300 rounded-xl drop-shadow-xl'>
            <img src={source} alt={alt} className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col text-center items-center text-2xl text-black'>
         <h2 className='text-5xl font-bold'>{title}</h2>  
         <h4 className='pl-2'>{date}</h4> 
         <a href={href} className='pb-4 pt-8 text-center'>
            <p className='text-center p-2 bg-gradient-to-b from-blue-900 to-gray-800 text-white rounded-lg'>Watch Demo</p>
                </a>
    </div>
        </div>
  )
}

export default Project