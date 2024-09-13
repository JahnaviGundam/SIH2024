import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='h-full'>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <ul className="flex flex-col justify-around text-3xl font-style: italic">
            <li className="mb-10 mt-20">
                    <NavLink
                    to="/"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Learn
                    </NavLink>
                    </li>
                <li className="mb-10">
                    <NavLink
                    to="/about"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        About
                    </NavLink>
                    </li>
                <li className="mb-10">
                    <NavLink
                    to="/games"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Games
                    </NavLink>
                </li>
                <li className="mb-10">
                    <NavLink
                    to="/leaderboard"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Leader Board
                    </NavLink>
                    </li>
                <li className="mb-10">
                    <NavLink
                    to="/login"
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                            ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Login/Signup
                    </NavLink>
                </li>
                
                
            </ul>
            </nav>
        </header>
    );
}
export default Header
