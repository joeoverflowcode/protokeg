import React from 'react'
import Skill from './Skill'

function Skills() {
    return (
        <div className="w-screen h-screen flex flex-col bg-gradient-radial from-slate-600 via-slate-700 to-slate-900 items-center">
<div className='sm:w-[70%] h-[95%] flex flex-col'>


                <h1 className='text-center text-4xl sm:text-5xl font-bold underline text-white m-10'>Skills</h1>
<div>

    <p className='text-3xl p-4 m-6 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

</div>
            <div className="p-8 md:p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 grid-auto-rows-auto text-white">

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
        </div>
    )
}
export default Skills