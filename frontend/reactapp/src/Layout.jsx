import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
function Layout() {
  return (
    <div className='flex flex-row'>
      <Header className='w-4/12'></Header>
      <div className='flex flex-col w-9/12'>
      <Outlet/>
      <Footer/>
      </div>
    </div>
  )
}

export default Layout
