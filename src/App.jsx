import React from 'react'
import Hero from './Components/Hero'
import Sidenav from './Components/Sidenav'
import Skills from './Components/Skills'
import Sample from './Components/Sample'
import Bio from './Components/Bio'
import Social from './Components/Social'
import Footer from './Components/Footer'
function App() {

  const isLargeScreen = window.innerWidth >= 768;
  return (
    <div 
    // className='min-h-screen bg-gradient-to-b from-slate-700 to-slate-600'
    // className='flex flex-col'
    >


    <Sample />
      {/* <Hero /> */}
      <Sidenav />

    <Footer/>
      {/* <Skills /> */}

    </div>
  )
}

export default App
