import React from 'react'
import Skill from './Skill'

function Skills() {
    return (
        <div className="mx-4 md:mx-20 skills flex flex-col justify-center pb-40">
                {/* heading for title */}
                <h1 className='text-center sm:text-5xl text-2xl'>Skills</h1>
                {/* Create a div and give it a class of skillsGrid for styling */}
            <div className="skillsGrid mt-20 grid grid-cols-3 md:px-8 md:grid-cols-6 gap-10 grid-auto-rows-auto">
             {/* Let's render multiple copies of the Skill component. Make sure you update *}the source, alt, and title for each icon */}
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"alt="The logo icon for JavaScript" title="JS"/>

                
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"alt="Java" title="JS"/>
                
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"alt="Java" title="JS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>

                
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"alt="Java" title="JS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"alt="Java" title="JS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" alt="The logo icon for Sequelize" title="Sequelize"/>


                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"alt="Java" title="JS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"alt="Java" title="JS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>

                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="Java" title="JS"/>
                
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"alt="Java" title="JS"/>


                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original-wordmark.svg"alt="Java" title="JS"/>

                
            </div>            
        </div>
    )
}
export default Skills