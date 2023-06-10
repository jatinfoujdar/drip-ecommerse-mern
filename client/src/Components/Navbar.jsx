import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {FaShoppingCart } from "react-icons/fa" 


const Navbar = () => {

  const[isLoggedIn,setIsLoggedIn] = useState(false)


const handleLogout = () => {
  setIsLoggedIn(false)
}



  return (
    <div>
  <div className="relative w-full bg-yellow-300">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      
    <img alt="Qries" src="https://res.cloudinary.com/dlb4xmxr0/image/upload/v1685259903/logo_vfi9xq.png" width={80} height={50} />
      
     <Link to="/"> <button className="font-bold rounded p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">Drip Ecommerse</button></Link>
    </div>
    <div className="hidden lg:block">
      <ul className="ml-12 inline-flex space-x-8">
        <li>
          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
           
          </a>
        </li>
        <li>
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <Link to="/cart">
          <button
            href="#"
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            <FaShoppingCart size={20}/>
            
          </button>
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex grow justify-end">
      <input
        className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach"
      />
    </div>
    <div className="ml-2 mt-2 hidden lg:block">
      <span className="relative inline-block">
     
      <Link to="/login">
      <button  type="button" className="bg-gradient-to-r p-2 pr-3 pl-3 rounded mb-2 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
         Login
      </button>
       </Link>
      
        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
      
    </div>
    <div className="ml-2 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>


    </div>
  )
}

export default Navbar