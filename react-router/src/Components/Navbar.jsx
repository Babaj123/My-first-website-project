import React from 'react'
import { Link,  } from 'react-router-dom'
import { IoBookOutline, } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { LuHandHeart } from "react-icons/lu";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function Navbar() {

   const [active, setActive] = useState("home");

   const location = useLocation();
    useEffect(() => {
        const path = {
            '/': 'home', '/about': 'about', '/contact': 'contact',
        };
        setActive(path[location.pathname]);
    }, [location]);





  return (
                <>
                    <nav className="bg-white shadow-md sticky top-0 z-50 h-[5rem] min-w-[200px]">
                    
                                <div className="container mx-auto px-4 py-3 flex flex-row justify-around items-center">

                                <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                                <IoBookOutline className='pb-1 text-[35px]' /><span className="text-gray-800">Modern<span className="text-blue-600">Blog</span></span>
                                </Link>

                                <div className="flex w-[400px] flex-row gap-8">


                                <Link to="/" onClick={() => setActive('home')} 
                                className={`px-4 py-2 rounded-md transition-all duration-200 ${active === 'home' ? "bg-blue-600 text-white" : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"}`}>
                                <HiOutlineHome className='inline pb-1 text-[20px] gap-x-4' />
                                
                                Home
                                </Link>

                                <Link to='/about' onClick={() => setActive('about')} 
                                className={`px-4 py-2 rounded-md transition-all duration-200 ${active === 'about' ? "bg-blue-600 text-white" : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"}`} >
                                <LuHandHeart className='inline text-[19px]' />      About

                                </Link>

                                <Link to="/contact" onClick={() => setActive('contact')} 
                                className={`px-4 py-2 rounded-md transition-all duration-200 ${active === 'contact' ? "bg-blue-600 text-white" : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"}`}>
                                <FaRegEnvelope className='inline pb-1 text-[22px]' />  Contact
                                </Link>







                                </div>

                            </div>
                        
                     </nav> 
                    

                </>
  )
}

export default Navbar

