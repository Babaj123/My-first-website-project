import React from 'react'
import { IoBookOutline, } from "react-icons/io5";
import { PiSpiralBold } from "react-icons/pi";
import { LuUsers, LuRocket } from "react-icons/lu";

function About() {
  return (


              <>
              
              <div className='text-center'>

                  
              <div className=' mt-[2rem] '>
                <h1 className='font-bold text-[35px] text-[#1e2938]'>About ModernBlog</h1>
                <p className='mt-5 text-[21px] text-[#1e2938]'>Learn more about our mission and story</p>
              </div>

                  <div className='max-w-6xl mx-auto px-6 py-12 flex justify-center "'>
                  
                  <div className="bg-white w-[90vw]   rounded-xl shadow p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left  md:w-2/3 py-15 about-container">
        
       
        <div className=" md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-2">
            ModernBlog was founded with a simple mission: to create a platform where writers and readers can connect through powerful storytelling.
            We believe that every story matters and every voice deserves to be heard.
          </p>
          <p className="text-gray-700">
            Since our launch, we've been committed to fostering a community of passionate writers and curious readers who share knowledge, experiences, and inspiration.
          </p>
        </div>

        
        <div className="flex flex-col items-center md:w-1/3 text-center">
          <IoBookOutline className='pb-1 text-[80px] text-blue-600' />
          <span className="text-gray-500">Empowering stories since 2024</span>
        </div>
      </div>

       </div>            


              

              <div className='flex justify-center max-w-3xl  mx-auto '>

                    <div className=' flex flex-col md:flex-row space-x-5  items-center '>

                  <div className=' w-2/3'>

                    <div className='flex justify-center'> <span className='bg-[#dbeafd] py-3 px-3 rounded-full'><PiSpiralBold className=' text-[35px] text-blue-600'/></span> </div>
                    
                    <h2 className='mt-3 text-[20px] font-bold text-[#1e2938]'>Our Mission</h2>
                    <p>To democratize storytelling and make quality content accessible to everyone.</p>
                  </div>

                  <div>

                    <div className='flex justify-center'>  <span className='bg-[#dcfce7] py-3 px-3 rounded-full'><LuUsers className='text-[35px] text-green-600' /></span></div>
                 
                  <h2 className='mt-3 text-[20px] font-bold text-[#1e2938]'>Our Community</h2>
                  <p>A diverse community of writers, readers, and thinkers from around the world.</p>
                  </div>


                  <div>
                    <div className='flex justify-center'>  <span className='bg-[#f3e8fd] py-3 px-3 rounded-full'><LuRocket className='text-[35px] text-purple-600' /></span> </div>
                    
                    <h2 className='mt-3 text-[20px] font-bold text-[#1e2938]'>Our Vision</h2>
                    <p>To be the leading platform for authentic, meaningful content and connections.</p>
                  </div>
                      

                    </div>





              </div>
    
















              </div>












              
              </>


                   



  )
}

export default About