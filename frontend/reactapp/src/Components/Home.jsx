import React from 'react'
import '../home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <ul className='flex flex-col m-20'>
    <li className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-15 mb-15 focus:outline-none'>
    <Link to="/executive">
      Executive
     </Link> 
    </li>
    <li className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-15 mt-15 mb-15  focus:outline-none'>
    <Link to="/judistration">
    judistration

     </Link> 

    </li>
    <li className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-15 mt-15 focus:outline-none'>
    <Link to="/legislative">
    legislative

     </Link> 
     
    </li>
    </ul>
  )
}

export default Home
