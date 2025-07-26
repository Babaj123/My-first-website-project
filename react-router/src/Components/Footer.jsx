import React from 'react'
import { Link } from 'react-router-dom'
import { LuGithub } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { IoBookOutline, IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


function Footer() {
  return (

     <div className='flex bg-gray-900 mt-[3.5rem] text-white flex-col py-12 '>



            <footer  className=" flex flex-col sm:flex-row md:flex-row sm:items-center md:items-center  justify-evenly gap-y-7  gap-x-7 py-5   overflow-y-hidden ">


                <div className="">
                <div className='pl-[1rem] max-w-[300px] ml-[1rem] space-y-3'>
                <h2 className="text-xl font-bold mb-2"> <IoBookOutline className='inline pb-1 text-[35px] text-blue-500' /> ModernBlog</h2>
                <p className="text-gray-400">
                Discover amazing stories, insights, and ideas from our community of writers. Join us in exploring the world through words.
                </p>

                <div>

                <div className="flex space-x-4 text-white mt-4">
                <a className=' bg-[#1e2938] py-1.5 px-1.5 rounded-md hover:bg-[#394a64]' href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <LuGithub className="hover:text-white" size={20} />

                </a>
                <a className='bg-[#1e2938] py-1.5 px-1.5 rounded-md hover:bg-[#394a64]' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <LuTwitter className="hover:text-white" size={20} /> 

                </a>
                <a className='bg-[#1e2938] py-1.5 px-1.5 rounded-md hover:bg-[#394a64]' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <LuLinkedin className="hover:text-white" size={20}/> 
                </a>
                </div>
                </div>

                </div>

                </div>


            <div className='space-y-3 ml-[2rem] '>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-4 flex flex-col text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <a className='hover:text-white' href="#">Priavcy Policy</a>
            </ul>
            </div>

            <div className='mr-[1rem] flex flex-col gap-y-5 ml-[2rem] '>

            <h3 className=''>Contact</h3>
            <ul className="space-y-4 text-gray-400 flex flex-col">
            <li className=' inline  '><FaRegEnvelope className='inline pb-1 text-[22px]' />  hello@modernblog.com</li>
            <li> <BsTelephone className='inline pb-1 text-[22px] ' />  +234 (0) 123 456 789</li>
            <li><IoLocationOutline className='inline pb-1 text-[22px]' /> Ibadan, Nigeria</li>
            </ul>


            </div>

             </footer>


            <hr className='text-gray-800 ml-[7rem] w-[50vw] mx-0 sm:max-w-[80vw] md:w-[80vw]' />


            <div className="text-center text-gray-300 mt-10 text-1xl">
            © {new Date().getFullYear()} ModernBlog. All rights reserved. Made with <CiHeart className='inline text-[24px] text-red-500 pb-1' /> in Nigeria
            </div>


        


      </div>
                

                
                
                
                

                    

  )
}

export default Footer





