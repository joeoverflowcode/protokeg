import React from 'react'


    function Project({href, source, alt, title, date}) {
        return  (
    <a className='hover:cursor border-2 border-black p-4' href={href}>
        <div className='flex flex-col text-center items-center'>
            <img src={source} alt={alt}/>
         <h2 className='text-2xl font-bold'>{title}</h2>  
         <h3 className='pl-2'>{date}</h3> 
    </div>
        </a>
  )
}

export default Project