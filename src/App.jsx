import React from 'react'
import Hero from './Components/Hero'
import Sidenav from './Components/Sidenav'
import Skills from './Components/Skills'
import Sample from './Components/Sample'
import Bio from './Components/Bio'
import Social from './Components/Social'
import Footer from './Components/Footer'
import NoBGHero from './Components/NoBGHero'
import MobileView from './Components/MobileView'
import Quote from './Components/Quote'
import Test from './Components/test'
import NewView from './Components/NewView'
import MediumView from './Components/mediumView'
import TestingBG from './Components/TestingBG'
import TopNav from './Components/TopNav'
import PopUpNav from './Components/PopUpNav'
import MobileFooter from './Components/MobileFooter'
import { Outlet } from 'react-router-dom'
import ShakeShack from './Views/ShakeShack'

function App() {


  return (

  <div className='flex flex-col h-screen'>

{/* <PopUpNav /> */}
{/* <TopNav /> */}

      {/* <TestingBG /> */}
      {/* <Sidenav /> */}

{/* <NewView/> */}

{/* <MediumView /> */}
{/* <Test /> */}
{/* <NoBGHero /> */}
    {/* <Sample /> */}
{/* <Quote /> */}
       {/* <Hero /> */}

{/* <MobileView/> */}
    {/* <Footer/> */}
      {/* <Skills /> */}

      <main className='flex flex-col h-screen'>
      <nav className=' '>
        <TopNav />

    </nav>

<Outlet />


    <footer className='bg-gray-900 text-white sticky bottom-0 z-50'>
    <Footer />
    
    </footer>



      </main>

      {/* <MobileFooter className=" 
      bg-gradient-to-r from-blue-950 from-1% via-gray-700 via-15% to-gray-900 to-60%"/> */}



</div>

  )
}

export default App
