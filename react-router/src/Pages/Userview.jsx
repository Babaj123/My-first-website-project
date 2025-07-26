import React from 'react'
import { useParams } from 'react-router-dom'
import {users} from "../userData"

function Userview() {
    const {id} = useParams();
    const User = users.find((user) => user.id == id);
    
  return (
    <div className='info'>

        <div className='profile-box'>

            <div className='overlay'>
            <img className='profile-picture' src={User.profilePic} alt="" />  
            </div>

            <div className='bio'>
            <h1> {User.name}</h1>
            <h3 > {User.bio}</h3>
            <h3> Age: {User.age}</h3>
             <h3> Email: {User.email}</h3>
             <h3>Lives in {User.location}</h3>
              
           
            </div>
        
        
        </div>
        
    </div>
  )
}

export default Userview