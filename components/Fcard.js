import React from 'react'
import Image from 'next/image'

const Fcard = ({ data1 }) => {
  return (
    <div className='grid justify-items-center shadow-lg rounded-xl mt-6 px-12 py-4 bg-slate-200  '>
      <Image src={require(`../public/${data1.imagee}.png`)} height={50} width={50} alt="Feature" />
      <p className='text-lg font-semibold mt-2'>{data1.heading}</p>
      <p className='text-xs leading-6 text-center mt-2'>{data1.info}</p>
    </div>
  )
}

export default Fcard
