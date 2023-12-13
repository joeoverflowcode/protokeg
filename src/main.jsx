import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './Views/About.jsx'

import './index.css'
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  }
 from 'react-router-dom'

 import { BrowserRouter as Router, Link } from 'react-router-dom'

import Skills from './Views/Skills.jsx'
import NewView from './Components/NewView.jsx'
import ErrorPage from './Views/ErrorPage.jsx'
import ShakeShack from './Views/ShakeShack.jsx'
import MobileView from './Components/MobileView.jsx'
import Projects from './Views/Projects.jsx'
import Contact from './Views/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(


<Route 
  path='/'
  element={<App />}
  errorElement={<ErrorPage />}

  >
  
{/* Index Page */}

  <Route 
  index element={<ShakeShack />}
/>


<Route 
path='skills'
element={<Skills />}
errorElement={<ErrorPage />}
/>

<Route
path='about'
element={<About />}
errorElement={<ErrorPage />}
/>

<Route
path='projects'
element={<Projects />}
errorElement={<ErrorPage />}
/>

<Route
path='contact'
element={<Contact />}
errorElement={<ErrorPage />}
/>

</Route>

  )
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)


