import Image from 'next/image'
import React from 'react'
import Itemss from './Itemss'
import 'animate.css'


const Feature = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-20'>
      <p className='text-center p-6 text-md'>Featured recruiter and employers</p>
      <div className='grid grid-cols-1 justify-items-center md:grid-cols-2  lg:grid-cols-4'>
        <div className='my-4 animate__animated animate__fadeInDown '> <Image src='/google.png' width={100} height={50} alt="Google" /></div>
        <div className='my-4 animate__animated animate__fadeInDown animate__delay-1s' >   <Image src='/amazon.png' width={100} height={50} alt="amazon" /></div>
        <div className='my-4 animate__animated animate__fadeInDown animate__delay-2s'>   <Image src='/slack.png' width={130} height={50} alt="slack" /></div>
        <div className='my-4 animate__animated animate__fadeInDown animate__delay-3s'>   <Image src='/drop.png' width={150} height={50} alt="drop" /></div>
      </div>
      <div className='p-4'>  <p className='text-center text-lg font-semibold mt-10'>How JOBS can help</p>
        <p className='text-center text-xs max-w-screen-sm mx-auto my-6 '>We are the largest independent job board, register your CV to apply today with simple search tool and instant job matches delivered to your inbox, its never been easier to land a new job with us </p></div>
      <div className='px-4 '><Itemss /></div>
    </div>

  )
}

export default Feature