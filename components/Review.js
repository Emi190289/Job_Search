import React from 'react'
import Image from 'next/image'



const Review = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <p className='text-center text-lg font-semibold mt-10'>What Our Customer Say</p>
      <div className='grid grid-cols-1 justify-items-center mt-10  md:grid-cols-2 md:px-20  '>
        <Image src={'/testimonial.png'} width={250} height={120} className='p-6' alt="msg" />
        <div className='mt-4 p-6 md:mt-0'>
          <Image src={'/star.png'} width={80} height={50} alt="star" />
          <p className='text-xs leading-6 mt-6'>We are the largest independent job board, register your CV to applying today. With simple search tool and instant job matches delivered to your inbox, it’s never been easear to land a new job with us.</p>
          <div className='mt-6 flex items-center'>
            <div className='mr-8'><p className='font-bold text-lg'>Kristina Kim</p>
              <p className='text-xs font-normal'>Product Designer</p></div>
            <Image src={'/google1.png'} width={100} height={50} alt="google" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Review