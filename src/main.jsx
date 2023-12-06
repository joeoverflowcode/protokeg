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

import Skills from './Components/Skills.jsx'
import NewView from './Components/NewView.jsx'
import ErrorPage from './Views/ErrorPage.jsx'
import ShakeShack from './Views/ShakeShack.jsx'
import MobileView from './Components/MobileView.jsx'
import Projects from './Views/Projects.jsx'

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
/>

<Route
path='about'
element={<About />}
/>

<Route
path='projects'
element={<Projects />}
/>

</Route>

  )
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)


