import React from 'react'
import  { useEffect, useState } from 'react';
import PostCard from '../Components/Postcard';
import { ImSpinner3 } from "react-icons/im";

function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    fetch(' https://api.slingacademy.com/v1/sample-data/blog-posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.blogs || []);
        setLoading(false);
        console.log('Fetched data:', data); 
      })
      
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-[] flex flex-col items-center justify-center  space-y-4">
        
        <div className=" "> <ImSpinner3 className='animate-spin text-6xl text-blue-500'/></div>
  
        
        <p className="text-xl text-gray-500 animate-pulse">
          Loading amazing content...
        </p>
      </div>
    );
  }


  return (
    <div className="container  ">
      
      <div>
      <h1 className='text-center text-5xl'> <strong> Welcome to <span className='text-blue-500'> ModernBlog</span></strong></h1>
       <p className=' second-header text-center text-[19px] max-w-[90vw] min-w-[70vw]'>  Discover amazing stories, insights, and ideas from our community of writers. Dive into a <br />world of knowledge and inspiration.</p>
      </div>

        <div className=' third-header flex items-center justify-center gap-x-[15px]  '>
          <div className='box-1'> <p className='text-center'> <span className='text-blue-500 text-3xl font-extrabold py-4'>10</span> <br />Posts</p></div>
          <div className='box-2'><p className='text-center'> <span className='text-green-500 text-3xl font-extrabold py-4'>20+</span>  <br />Writters</p></div>
          <div className='box-3'><p className='text-center'> <span className='text-purple-600 text-3xl font-extrabold'>100k </span> <br />Readers</p></div>
        </div>
      
      
    <h1 className=" latest-post text-3xl font-bold text-center mb-6 ">Latest Posts</h1>

          <div className='last-section'>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:ml-[6rem]  ">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      

    </div>

          </div>
    
            




    



  </div>

  )
}

export default Home;