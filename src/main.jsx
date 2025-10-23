import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Signup from './components/Signup'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Writepost } from './components/Writepost'
import { Allblogs } from './components/Allblogs'
import { Blogdetails } from './components/Blogdetails'
import {Editblog} from "./components/Editblog.jsx"

const router= createBrowserRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/writepost",
    element:<Writepost/>
  },
  {
    path:"/allblogs",
    element:<Allblogs/>
  },
  {
    path:"/:title",
    element: <Blogdetails/>
  },
  {
    path:"/edit/:edit",
    element: <Editblog/>
  }
])

createRoot(document.getElementById('root')).render(
<StrictMode>
<RouterProvider router= {router}/>
</StrictMode>)
