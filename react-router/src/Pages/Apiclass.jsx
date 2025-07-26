import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function Apiclass() {

    console.log("Render");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/").then((res) => res.json())
        .then ((data) => {setData(data);});
    }, []);

    console.log(data);


  return (

                    <>
                    
                    <div className='bg-yellow-300'>
                    
                        <center>
                            <i>
                            <h1 className=' text-[30px] pb-[1rem] font-sans'>Welcome to My Products Page</h1>
                            </i>
                       
                        </center>
                        <hr />
                    </div>
                   

                    <div className='products grid grid-cols-3 gap-6 ml-6 mr-6  mt-7 '>
                    

                    {data.map( data => ( 

                        <div className='  box-shadow p-[10px]'  key={data.id}>
                            
                            <h1 className=' category ml-[1rem] max-w-[200px] min-w-[140px]  rounded-md  bg-yellow-300'>{data.category}</h1>
                            <h3 className=' mt-[1rem] font-extrabold'>{data.title}</h3>
                              <img className='image2 w-[150px] mt-6' src={data.image} alt="" />

                              <hr className='max-w-[200px] mt-6'/>
                              <h5 className=' mt-[1rem] mb-4 font-extrabold'>Price: ${data.price}</h5>
                                <hr className='max-w-[200px]' />
                              <div className='description mt-[1rem]   '>
                              <p className=' p-3  '>{data.description}</p> 
                              
                              </div>
                              
                        </div>
                        
                ))}
                
            





                    </div>
                    
                    </>
                    
  );
}

export default Apiclass