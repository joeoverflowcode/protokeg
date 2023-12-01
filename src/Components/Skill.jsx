import React from 'react'

function Skill({source, alt, title}) {
    return  (
<div className='flex flex-col text-center items-center'>
        <img src={source} alt={alt} title={title}/>
     <h2 className='text-2xl'>{title}</h2>   
</div>
        )
}

export default Skill