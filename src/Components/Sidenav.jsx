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
    AiOutlineFileProtect,
    AiOutlineTool

} from 'react-icons/ai'

import{BsPerson,
    BsTrophy,
    BsFile,
    BsBarChartLine,
    BsColumnsGap,
    BsFileImage,
    BsJournals,
    BsGraphUp,
    BsImages,
    BsTools
} from 'react-icons/bs'

import {GrProjects,
    GrDocumentUser,
    GrAchievement,
} from 'react-icons/gr'

import { useNavigate } from 'react-router-dom'



function Sidenav({iconColor}) {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }
    const outlineMenuColor = `${iconColor} text-white absolute top-4 right-4 z-[99] sm:hidden`

  return (


    <div >
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

        <div className='sm:block hidden fixed top-[5%] z-10 '>
            <div className='flex flex-col justify-evenly
            '>

                <a href='/' className='text-white rounded-full m-2 shadow-md bg-gray-800 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 flex flex-col justify-center p-4 group relatve'>

                <div className='px-2 absolute left-full opacity-0 invisible transition duration-1000 ease-in-out group-hover:opacity-100 group-hover:visible font-bold text-xl
                                    from-gray-50 via-gray-100 to-gray-500 bg-gradient-to-b bg-clip-text text-transparent
                
                ' >
Home
</div>
                    
                    <AiOutlineHome size={30}/>

                </a>

                <a href='/about' className='text-white rounded-full shadow-md bg-gray-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 group'>
                    
                <div className='px-2 absolute left-full opacity-0 invisible transition duration-500 ease-in-out group-hover:opacity-100 group-hover:visible font-bold text-xl
                                    from-gray-50 via-gray-100 to-gray-500 bg-gradient-to-b bg-clip-text text-transparent
                
                ' >
About
</div>
                    
                    
                    <BsPerson size={30}/>

                </a>
                {/* <a href='#skills' className='rounded-full shadow-lg bg-slate-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrAchievement 
                    style={{color:'white'}}
                    size={30}/>
                </a> */}
                <a href='/skills' className='text-white rounded-full shadow-md bg-gray-600 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 group'>

                <div className='px-2 absolute left-full opacity-0 invisible transition duration-700 ease-in-out group-hover:opacity-100 group-hover:visible font-bold text-xl
                                    from-gray-50 via-gray-100 to-gray-500 bg-gradient-to-b bg-clip-text text-transparent
                ' >
Skills
</div>
                    <BsBarChartLine size={30}/>
                </a>


                <a href='#projects' className='text-white rounded-full shadow-md bg-gray-500 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 group'>


<div className='px-2 absolute left-full opacity-0 invisible transition duration-700 ease-in-out group-hover:opacity-100 group-hover:visible font-bold text-xl
                    from-gray-50 via-gray-100 to-gray-500 bg-gradient-to-b bg-clip-text text-transparent' >
Projects
</div>
    <BsJournals
        size={30}/>
</a>
                 {/* <a href='#projects' className='text-white rounded-full shadow-lg bg-slate-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={30}/>
                </a>
                <a href='#resume' className='text-white rounded-full shadow-lg bg-slate-400 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrDocumentUser size={30}/>


                </a> */}
                
                <a href='mailto:aguado.joe@gmail.com?subject=Something' className=' text-white  
                bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                rounded-full shadow-gray-500
                m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 relative
                group
                
                '>
                    <div className='flex items-center group'>

                    <AiOutlineMail 
                    className=''
                    size={30}/>
                    <span className=" text-xl
                    absolute left-full font-bold rounded-lg px-2 opacity-0 invisible transition duration-300 ease-in-out group-hover:opacity-100 group-hover:visible
                    from-gray-50 via-gray-100 to-gray-500 bg-gradient-to-b bg-clip-text text-transparent
                    ">
        Contact
      </span>
                    </div>
                

                </a>


                {/* <a href='#contact' className=' text-white  
                bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                rounded-full shadow-gray-800
                m-2 p-4 cursor-pointer duration-300
                group'>
                    <div className='flex items-center'>

                    <AiOutlineMail 
                    className=''
                    size={30}/>
                    <span className="
                    absolute left-full text-xl font-bold rounded-lg px-4 opacity-0 invisible transition duration-1000 ease-in-out group-hover:opacity-100 group-hover:visible">
        Contact
      </span>
                    </div>
                

                </a> */}

{/* <a href="#Resume" className='border-2px border-black m-2 p-4 rounded-full flex justify-center group bg-black text-white shadow-gray-200 shadow-md'>

    <div className='px-4 absolute left-full opacity-0 invisible transition duration-500 ease-in group-hover:opacity-100 group-hover:visible font-bold text-xl text-white' >
Resume
</div>
    <AiOutlineFile
    size={30}/>
</a> */}



            </div>
        </div>
     </div>
  )
}

export default Sidenav