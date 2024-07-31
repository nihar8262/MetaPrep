import React from 'react'
import { topics } from '../../../data/constant'

export const AptiOption = () => {
  return (
    <div className='pt-20 w-full'>
        {
        topics.map((item)=>(
            <div className='flex flex-wrap gap-10'>
                {
                    item.Aptitude.map((it)=>(
                        <div >
                            <button className='button'>{it.topic} </button>
                        </div>
                    ))
                }
            </div>
        ))
    }
    </div>
  )
}
