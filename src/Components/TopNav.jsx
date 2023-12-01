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


function TopNav({iconColor}) {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }
    const outlineMenuColor = `${iconColor} text-white absolute top-4 right-4 z-[99] sm:hidden`


  return (
    <div>


<AiOutlineMenu 
        size={30}
        className={outlineMenuColor}
        onClick={handleNav} />
        { nav ? (
            <div className='sm:hidden fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20'>

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

<div className='sm:block hidden absolute z-10'>
    <div className='w-screen absolute top-[2%] left-0 h-[10vh] bg-black/10 flex justify-between items-center p-4 text-white'>
        <a href="#" className="text-4xl font-bold hover:translate-y-2 ease-in duration-200">J<span className='pl-2'>A</span></a>
        <ul className="flex font-bold">
  <li className='p-2 hover:bg-pink-200'><a href="#">About</a></li>
  <li className='p-2 hover:text-blue-500'><a href="#">Skills</a></li>
  <li className='p-2 hover:underline'><a href="#">Projects</a></li>
  <li className='p-2 hover:opacity-20'><a href="#">Contact</a></li>


  <li className='p-2 hover:scale-110 hover:opacity-50 ease-in duration-200'><a href="#">About</a></li>
  <li className='p-2 hover:rotate-45'><a href="#" className=''>Skills</a></li>
  <li className='p-2 hover:opacity-50 hover:underline'><a href="#" className=''>Projects</a></li>
  <li className='p-2 hover:translate-y-2 ease-in duration-500'><a href="#" className=''>Contact</a></li>

</ul>
</div>

</div>




    </div>
  )
}

export default TopNav




