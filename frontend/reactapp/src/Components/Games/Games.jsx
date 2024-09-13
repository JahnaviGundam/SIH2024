import React from 'react'
import { Link } from 'react-router-dom'
function Games() {
  return (
    <div>
      <ul>
      <li>
      <Link to="/snake">
        snake game
       </Link> 
      </li>
      <li>
      <Link to="/card">
      card game

       </Link> 

      </li>
      <li>
      <Link to="/spin">
      spin wheel

       </Link> 
       
      </li>
      </ul>
    </div>
  )
}

export default Games
