import React from 'react'
import Skill from '../Components/Skill'
import Rubix from '../Components/Rubix'


function Skills() {
    return (

        <div className="flex flex-col bg-gradient-radial from-white via-white to-white">




<div className='w-full flex-1 flex-col pt-4'>

{/* <h1 className='text-center m-2 text-4xl sm:text-5xl font-bold underline'>Projects</h1> */}
<h1 className='text-4xl py-4 text-center sm:text-4xl font-bold m-1 text-[#001b5e] tracking-tighter'><span className='pl-1 pr-1 border-[#001b5e] border '>S</span>kills</h1>
<p className='p-4'>Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit. Amet est placerat in egestas erat imperdiet sed. Nam libero justo laoreet sit amet cursus sit. Facilisis sed odio morbi quis commodo. Nam aliquam sem et tortor consequat id porta.</p>
</div>


{/* <div className='w-full h-full flex justify-center pb-4'>


    <Rubix />

</div> */}

            <div className="flex-col grid grid-cols-3 sm:grid-cols-5 gap-8 sm:gap-10 m-auto grid-auto-rows-auto p-8 sm:p-10">

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"alt="The logo icon for JavaScript" title="JavaScript"/>

                
                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"alt="Java" title="Python"/> */}
                
                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"alt="Java" title="Java"/> */}

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="The logo icon for react" title="React"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="The logo icon for HTML 5" title="HTML 5"/>

                
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="The logo icon for CSS3" title="CSS 3"/>


                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="The logo icon for TailwindCSS" title="Tailwind CSS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Java" title="Bootstrap"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"alt="Icon for Redux" title="Redux"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"alt="Java" title="Git"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="The logo icon for GitHub" title="GitHub"/>


                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"alt="Java" title="PostgreSQL"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="The logo icon for Sequelize" title="Sequelize"/>


                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"alt="Java" title="Express"/> */}


                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"alt="Java" title="Visual Studio"/> */}


                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/> */}

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="The logo icon for NodeJS" title="Node JS"/>  
                








{/* 
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Java" title="Ruby"/> */}
                
                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg"alt="Java" title="Ruby On Rails"/> */}

{/* 
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"alt="Java" title="Swift"/> */}

                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"alt="Java" title="Arduino"/> */}

                {/* <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"alt="Java" title="Bash"/> */}


{/* 
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"alt="Java" title="IntelliJ"/> */}
{/* 
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"alt="Java" title="XCode"/> */}

            </div>


            </div>            
    
    )
}
export default Skills