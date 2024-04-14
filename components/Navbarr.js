'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import Link from 'next/link';


const Navbarr = () => {
  const [icons, setIcons] = useState(false)
  const handleClick = () => {
    setIcons(!icons)
  }
  return (
    <div className=''>
      <div className='p-4 flex items-center max-w-screen-xl mx-auto '>
        <div className='basis-1/2 md:basis-1/4'>
          <Link href='/' >
            <Image src='/logo.png' className='absolute top-6 left-5 md:static' width={50} height={50} alt="logo" />
          </Link>
        </div>
        {icons ?
          <div className=' basis-1/2 text-sm grid grid-col-1 justify-items-end   gap-y-3  pt-3 md:hidden'>
            <FaRegWindowClose className='text-xl  ' onClick={handleClick} />
            <div className=' text-sm grid grid-col-1 justify-items-end  gap-y-2  '>
              <Link href='/' >Home</Link>
              <Link href='/joblist'>JobList</Link>
              <Link href='#' className='cursor-not-allowed opacity-50 pointer-events-none'>Career advice</Link>
              <Link href='#'>Company A-Z</Link>
              <Link href='#'>Login</Link></div>
            <button className='border-2 rounded-lg py-2 px-4 bg-[#56BC80] text-white' >Register</button>
          </div>
          : <FaBars className='ml-28 text-3xl pt-2  sm:ml-72 md:hidden' onClick={handleClick} />}



        <div className=' hidden md:inline md:basis-1/2 md:text-sm md:flex md:justify-evenly md:items-center'>
          <Link href='/' >Home</Link>
          <Link href='/joblist'>JobList</Link>
          <Link href='#' className='cursor-not-allowed opacity-50 pointer-events-none'>Career advice</Link>
          <Link href='#' className='cursor-not-allowed opacity-50 pointer-events-none'>Company A-Z</Link>
        </div>
        <div className='hidden md:inline md:basis-1/4 md:text-sm  md:flex md:justify-evenly md:items-center cursor-not-allowed opacity-50 pointer-events-none'>
          <Link href='/login'>Login</Link>
          <button className='border-2 rounded-lg py-2 px-4 bg-[#56BC80] text-white cursor-not-allowed opacity-50 pointer-events-none'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbarr