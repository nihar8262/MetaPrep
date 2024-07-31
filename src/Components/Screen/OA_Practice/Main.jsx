import React, { useState } from 'react'
import { CSOption } from './CSOption';
import { AptiOption } from './AptiOption';

export const Main = () => {
  const [csFundamental,getCSFundamental]=useState(false);
  const [apti,getApti]=useState(false);

  const toggleCS = () => {
    getCSFundamental(!csFundamental);
  }
  const toggleApti = () =>{
    getApti(!apti);
  }
  return (
    <div>
      <div>
      <h1>PRACTICE UNLIMITED</h1>
      <h3>PRACTICE FOR INTERVIEW</h3>
      </div>
      
      <div className='pt-20'>
         <div className='flex items-center justify-center gap-20'>
           <button className='button' onClick={toggleCS} >CS Fundamental</button>
           <button className='button' onClick={toggleApti}>Aptitude</button>
         </div>

         {
          csFundamental ? 
          <CSOption/>
           : null
         }

         {
          apti ? <AptiOption/> : null
         }
      </div>
    </div>
  )
}
