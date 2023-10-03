import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contactus from './components/Contactus/Contactus.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout />,
//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"Contactus",
//         element:<Contactus />
//       }

//     ]
    
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element = {<Layout/>}>

      <Route path='' element ={<Home/>} />
      <Route path='about' element ={<About/>} />
      <Route path='Contactus' element ={<Contactus/>} />
      <Route path='User/:userid' element ={<User/>} />
      <Route path='Github' element ={<Github/>} />
    </Route>
   
  )
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
