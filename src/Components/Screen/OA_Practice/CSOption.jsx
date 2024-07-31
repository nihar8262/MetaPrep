import React, { useState } from 'react'
import { topics } from '../../../data/constant'
import { CS } from './CS'

export const CSOption = () => {

    const [topic,setTopic]=useState(null);
  return (
    <div className='pt-20 '>
        {
        topics.map((item)=>(
            <div className='flex flex-wrap gap-10'>
                {
                    item.programming.map((it)=>(
                        <div className=''>
                            <button onClick={()=>setTopic(it.topic)} className='button'>{it.topic} </button>
                        </div>
                    ))
                }
            </div>
        
        ))
    }
    {topic&&<div><CS topic={topic}/></div>}
    </div>
  )
}
