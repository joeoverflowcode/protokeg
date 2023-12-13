import 
    React, 
    {useState} 
from 'react'

import { 
    AiOutlineMenu, 
    AiOutlineHome,
    AiOutlineProject,
    AiOutlineMail,
    AiOutlineFile,
    AiOutlineFileProtect

} from 'react-icons/ai'

import{BsPerson,
    BsTrophy,
    BsFile,
    BsBarChartLine,
} from 'react-icons/bs'

import {GrProjects,
    GrDocumentUser,
    GrAchievement,
} from 'react-icons/gr'


function TopNav({iconColor}) {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }
    const outlineMenuColor = `${iconColor} absolute top-4 right-4 z-[99] sm:hidden text-white`


  return (
    <div>


<AiOutlineMenu 
        size={30}
        className={outlineMenuColor}
        onClick={handleNav} />
        { nav ? (
            <div className='sm:hidden fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20'>

                <a href='/' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome
                    size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a href='/about' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson
                    size={20}/>
                    <span className='pl-4'>About</span>
                </a>
                <a href='/skills' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsBarChartLine
                    size={20}/>
                    <span className='pl-4'>Skills</span>
                </a>
                {/* <a href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject
                    size={20}/>
                    <span className='pl-4'>Work</span>
                </a> */}
                <a href='/projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects
                    size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>
                {/* <a href='#resume' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrDocumentUser
                    size={20}/>
                    <span className='pl-4'>Resume</span>
                </a> */}
                <a href='/contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail
                    size={20}/>
                    <span className='pl-4'>Contact</span>
                </a>
            </div>
            ) 
            : (
                ''
            )
        }

<div className='sm:block hidden'>

    <div className='bg-gray-900 flex justify-between items-center sticky top-0 z-50 text-white p-4 '>
        <a href="/" className="text-4xl font-bold hover:translate-y-2 ease-in duration-300">J<span className='pl-2 '>A</span></a>
        <ul className="flex font-bold">

  <a className="p-2 border-b-2 border-transparent hover:border-gray-100" href="/about">About</a>

  <a className="p-2 hover:opacity-80 hover:scale-125 hover:text-blue-600" href="/projects">Projects</a>
 <a href="/skills" className='p-2 hover:rotate-45'>Skills</a>



 <a href="/contact" className=' p-2 hover:translate-y-2 hover:scale-125  ease-in duration-100 border-b-2 border-transparent  hover:border-blue-600'>Contact</a>

</ul>
</div>

</div>




    </div>
  )
}

export default TopNav




