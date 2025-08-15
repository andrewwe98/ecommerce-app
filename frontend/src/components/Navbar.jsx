import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import '../index.css' // Ensure Tailwind CSS is imported

const Navbar = () => {
return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-white">
        <img src={assets.logo} className="w-40" alt="Logo" />

        {/* NavLinks centered horizontally */}
        <div className="flex items-center justify-between py-5 font-medium">
        <ul className="gap-5 text-sm text-gray-700 hidden sm:flex">
            
            <NavLink
                to="/"
                className="flex flex-col items-center gap-1"
            >
               <p>Home</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                
            </NavLink>

            <NavLink
                to="/collection"
                className="flex flex-col items-center gap-1"
            >
               <p>COLLECTION</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                
            </NavLink>
            
            <NavLink
                to="/about"
                className="flex flex-col items-center gap-1"
            >
               <p>ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"  />
                
            </NavLink>
            
            <NavLink
                to="/contact"
                className="flex flex-col items-center gap-1"
            >
               <p>CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                
            </NavLink>
            
            
        </ul>
        {/* Search and Profile icons to the middle right of nav links */}
        <div className="flex items-center gap-6 ml-8">
            <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />
            <div className="group relative">
            <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
            <div className="dropdown-menu hidden group-hover:block left-0 pt-4 absolute">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-sm">
                <p className="cursor-pointer hover:text-blue-600"> Profile</p>
                <p className="cursor-pointer hover:text-blue-600">Orders</p>
                <p className="cursor-pointer hover:text-blue-600">Logout</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
)
}

export default Navbar;
