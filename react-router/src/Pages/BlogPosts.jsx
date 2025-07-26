import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa";


function BlogPosts() {

    const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.blog); 
        setLoading(false);
      }) }, [id] );   

      if (loading) {
        return(

            <div className='flex flex-col mt-[2rem] items-center justify-center'>
                                <span className=''>   <FaSpinner className='animate-spin duration-3000 text-[50px] '/>    </span>
                     <p className='text-center mt-10 animate-pulse duration-1000 '>Just a moment! Loading content....</p>
            </div>
           
        )
      } 



  return (

                <>
                

                <div className='  blog-cont  mt-[2rem]  text-center w-[300px] min-w-[150px]  font-medium  '>
                            <Link to="/" className="text-blue-600 hover:underline text-md      ">
                            ← Back to posts </Link>
                            </div>


                <div className='flex flex-col items-center justify-center'> 
                    
               



                            <div className=' mt-[3rem]  w-[90vw] sm:w-[70vw] md:max-w-[60vw] lg:max-w-[60vw] blog-box   '>
         
         <h1 className='mt-[1.5rem] font-extrabold text-4xl'> {post.title}</h1>
         <div className='mt-[1.5rem] space-x-[1rem]'>
             <span> <FiUser className='inline text-[22px] pb-1' /> Author {post.id}</span>
             <span> <CiCalendar className='inline text-[22px] pb-1'/> {new Date(post.created_at).toDateString()}</span>
             <span className='bg-[#bad5f9] span1 px-2.5 py-1.5 pl-2 text-violet-900 text-sm'> {post.category} </span>
         </div>
         
         
         <div className=' mt-[1.5rem] space-x-4'>
             <button className=' bg-[#f9dcdc] py-2 px-3 p-1 pl-1 rounded-md text-[#ea4e4b]'> <CiHeart className='inline text-[22px] pb-1' /> Like</button>
             <button className=' py-2 px-3 p-1 pl-1 rounded-md bg-[#eff6fe] text-[#175bf6]'> <IoShareSocialOutline className='inline text-[22px] pb-1'/> Share</button>
         </div>
         
         <p className="text-gray-700 text-lg leading-relaxed mt-[1.5rem]">
             {post.content_text}
         </p>
         
         </div>





                </div>



               

                            
                           


                  
         

                            
                            

                   












                
                </>


                   
  )
}

export default BlogPosts