import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Games from './Components/Games/Games.jsx'
import Snake from './Components/Games/Snake.jsx'
import Card from './Components/Games/Card.jsx'
import Spin from './Components/Games/Spin'
import LeaderBoard from './Components/LeaderBoard'
import Login from './Components/Login'
import Executive from './Components/Executive'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}> 
    <Route path=""  element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="games" element={<Games/>}/>
    <Route path="/snake" element={<Snake/>}/>
    <Route path="/card" element={<Card/>}/>
    <Route path="/spin" element={<Spin/>}/>
    <Route path="/leaderboard" element={<LeaderBoard/>}/>
    <Route path="/executive" element={<Executive/>}/>
    <Route path="/login" element={<Login/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
