import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Bounce} from "react-toastify"


function Effects() {
    const [state, setState] = useState(0);
    const [num, setnum] = useState(true);


    useEffect(() => {
       console.log("Render"); }, [num]);

       console.log(state);
       console.log(num);

  
    const Addfn = () => {
        
        setState(state + 1)
        toast.success('🦄 Wow you self don try!',)
    
    };

    
    
  return (

         <div className='usestate'>
            <button className='button' onClick={Addfn}>+</button>
            {state}
            <button onClick={() => setnum(!num)}>-</button>
                    
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
                />
            
         </div>


  )
}

export default Effects