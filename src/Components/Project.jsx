import React from 'react'


    function Project({href, source, alt, title, date}) {
        return  (

    <div className='relative flex items-center justify-center h-auto w-full hover:cursor group hover:bg-gray-300 rounded-xl drop-shadow-xl'>
            <img src={source} alt={alt} className='rounded-xl group-hover:opacity-5'/>

        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col text-center items-center text-black'>

    

         <h2 className='text-3xl sm:text-3xl md:text-4xl font-bold flex '>{title}</h2>  
     <h4 className='text-xl sm:text-2xl md:text-3xl pl-2'>{date}</h4> 
         
<div className='mt-3'>

         <a href={href} className=' text-center'>
            <p className='text-center p-2 bg-gradient-to-b from-blue-900 to-gray-800 text-white rounded-lg text-xl m-2'>Watch Demo</p>
                </a>
                <a href={href} className=''>
            <p className='text-center p-2 bg-gradient-to-b from-blue-900 to-gray-800 text-white rounded-lg text-xl m-2'>Code Walkthrough</p>
                </a>
</div>

    
    </div>
        </div>
  )
}

export default Project