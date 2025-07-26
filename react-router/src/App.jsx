import Home from './Pages/Home'
import React from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {Routes, Route} from "react-router-dom"
// import Userview from './Pages/Userview'
// import Effects from './Pages/Effects'
// import Apiclass from './Pages/Apiclass'
import Navbar from './Components/Navbar'
import BlogPosts from './Pages/BlogPosts'
import Footer from './Components/Footer'



function App() {
  return (


    <div className='app-container'>

          {/* 
          { <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path= "/user/:id" element={<Userview />}/>
              </Routes> }
            <Effects/> */}
            {/* <Apiclass/> */}

            <Navbar/>
            
            {
              <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/post/:id" element={<BlogPosts/>} />

              </Routes>

            }

              <Footer/>






    </div>


  )
}

export default App