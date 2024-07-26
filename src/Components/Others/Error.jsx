import React from 'react'

const Error = () => {
  return (
    <div className='h-[73vh] bg-black w-full'>
        <div className='text-center text-white'>
            <div className='text-[50vw] md:text-[400px] pt-32 md:pt-0'> 404
            </div>
            <div className='text-center'>
                <div className='text-5xl -mt-20'>Page Not Found</div>
                <div className='text-lg'>The page you are looking for doesn't exist or has been moved</div>
            </div>
        </div>
    </div>
  )
}

export default Error