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
    BsFile
} from 'react-icons/bs'

import {GrProjects,
    GrDocumentUser,
    GrAchievement,
} from 'react-icons/gr'


function Sidenav() {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }

  return (
    <div >
        <AiOutlineMenu 
        size={32}
        className="absolute top-4 right-4 z-[99] sm:hidden"
        onClick={handleNav} />
        { nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>

                <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome
                    size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a href='#about' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson
                    size={20}/>
                    <span className='pl-4'>About</span>
                </a>
                <a href='#skills' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrAchievement
                    size={20}/>
                    <span className='pl-4'>Skills</span>
                </a>
                <a href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject
                    size={20}/>
                    <span className='pl-4'>Work</span>
                </a>
                <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects
                    size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>
                <a href='#resume' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrDocumentUser
                    size={20}/>
                    <span className='pl-4'>Resume</span>
                </a>
                <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
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

        <div className='sm:block hidden fixed top-[15%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={30}/>
                </a>
                <a href='#about' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={30}/>
                </a>
                <a href='#skills' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrAchievement size={30}/>
                </a>
                <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={30}/>
                </a>
                <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={30}/>
                </a>
                <a href='#resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrDocumentUser size={30}/>
                </a>
                <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={30}/>
                </a>

            </div>
        </div>
     </div>
  )
}

export default Sidenav