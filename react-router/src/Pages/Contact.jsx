import React from 'react'
import {  IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { LuHandHeart, LuGithub, LuTwitter, LuLinkedin  } from "react-icons/lu";
import  { useState } from 'react';

function Contact() {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setError(''); };
   
      const handleSubmit = (e) => {
        e.preventDefault();
      
        
        alert("Submitted successfully! We will get back to you.");
      
        
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      
        setSubmitted(true); 
    
      setTimeout(() => setSubmitted(false), 5000); 
            };





  return (



                <div>
                        <h1 className='text-center text-[34px] font-bold mt-[3rem] text-gray-700 '>Get In Touch</h1>
                        <p className='text-center text-[20px] mt-[1rem] text-gray-700'>We'd love to hear from you. Send us a message!</p>

                        <div className='flex justify-center max-w-6xl mx-auto px-6 py-12'>

                          <div className='flex  flex-col space-y-[3rem] sm:flex-row md:flex-row items-center justify-center gap-x-12 text-left  w-2/3 py-15 bg-white rounded-xl  '>
                          

                          <div className=' contact-border'>
                          <h1 className='font-bold text-2xl mt-4'>Send Message</h1>

                          <form onSubmit={handleSubmit}>

                                <div className='flex flex-col mt-5'>
                                  <label className='font-semibold' htmlFor="Name">
                                    Name
                                  </label>
                                <input required className='border mt-1.5 border-gray-400 py-2 px-4 rounded-md text-left focus:ring focus:ring-blue-200 focus:outline-none' type="text" name="name" id="name" placeholder='Your full name' value={formData.name}
                                 onChange={handleChange} />                         
                                </div>

                                <div className='flex flex-col mt-5'>
                                  <label className='font-semibold' htmlFor="Email">Email</label>
                                  <input className='border mt-1.5 border-gray-400 py-2 px-4 rounded-md text-left w-[350px] focus:outline-none focus:ring focus:ring-yellow-200 ' type="email" name="email" id="email" placeholder='your.email@example.com' required value={formData.email}
                                   onChange={handleChange} />
                                </div>

                                <div className='flex flex-col mt-5'>
                                  <label className='font-semibold' htmlFor="Message">Message</label>
                                  <textarea
                                       required
                                       name='message'
                                      rows="5"
                                      placeholder="Tell us what's on your mind..."
                                      value={formData.message}
                                        onChange={handleChange}
                                      className="w-full border mt-1.5 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-red-200" >  
                               </textarea>   
                                </div>
              
                              </form>

                              <button onClick={handleSubmit} type='submit' className='text-white mt-5 bg-blue-600 py-3 px-3 rounded-md cursor-pointer w-[350px]'> Send Message😉 ...</button>

                          </div>


                          <div className=' h-full  '>

                            <div className=' contact-info '>
                            <h1 className='font-semibold text-2xl mt-3'>Contact info</h1>


                            <div className='inline-flex gap-3 mt-4'>
                            <span className='bg-[#dbeafd] py-1  px-2 rounded-md'> <FaRegEnvelope className='inline mt-2 text-blue-700 text-[20px]' /> </span>
                            <p>  <span className='font-semibold'>Email</span> <br /> hello@modernblog.com  </p>
                            </div>

                            <div className='inline-flex gap-3 mt-3'>
                              <span className='bg-[#d5f3df] py-1  px-2 rounded-md  '> <BsTelephone className='inline text-green-700 mt-2 text-[20px]' /></span>
                              <p> <span className='font-semibold'>Phone</span> <br />
                              +234 (0) 123 456 789</p>
                            </div>
                                          <br />
                            <div className='inline-flex gap-3 mt-3'>
                              <span className='bg-[#ecdff9] py-1  px-2 rounded-md '> <IoLocationOutline className='inline text-purple-800 mt-2 text-[20px]' /> </span>
                              <p> <span className='font-semibold'>Location</span> <br />
                              Ibadan, Nigeria</p>
                            </div>

                            </div>

                            
                             
                            <div className='  flex flex-col mt-[3.5rem] items-center justify-center'>
                                <span> <LuHandHeart className=' text-blue-600 text-[46px]' /> </span>
                                <h2 className='mt-2 font-semibold text-[20px]'> Let's Connect</h2>
                                <p className='mt-2'> Follow us on social media for updates</p>
                                <div className='flex flex-row gap-8 mt-2.5 '>
                                
                                
                              
                                <a className=' anchor1  py-1.5 px-1.5 rounded-md' href="#"> <LuGithub className="text-gray-800  hover:text-green-300 hover:bg-gray-900 hover:shadow-2xl hover:rounded-md hover:py-1 hover:text-[28px] transition-all ease-in-out duration-400"  /></a>
                                <a className='anchor2  py-1.5 px-1.5 rounded-md' href="#"> <LuTwitter className="text-gray-700 text-[17px] hover:text-white hover:bg-blue-600 hover:shadow-2xl hover:rounded-md hover:py-1 hover:text-[28px] transition-all ease-in-out duration-400 "  /></a>
                                <a className='anchor3   py-1.5 px-1.5 rounded-md' href="#"> <LuLinkedin className="text-gray-700  hover:text-red-400 hover:bg-[#273030] hover:shadow-2xl hover:rounded-md hover:py-1 hover:text-[28px] transition-all ease-in-out duration-400 " /> </a>

                                          <hr />


                                </div>

                            </div>
                            

                          </div>


                         
                          
                         
                          
                       
                          
                          
                          
                          
                          </div>







                        </div>



                </div>




  )
    };

export default Contact;