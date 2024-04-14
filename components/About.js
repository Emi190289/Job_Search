"use client"
import React from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import useNavigate from 'react'
import Link from 'next/link';
import 'animate.css'
import { useRouter } from 'next/navigation'


const About = () => {
  const router = useRouter()
  return (
    <section className='md:bg-slate-200'>
      <div className='max-w-screen-lg mx-auto  flex items-center '>
        <div className='p-20 '>
          <div className='md:self-center md:static'>
            <p className='text-3xl font-black '> Find your dream job with us</p>
            <p className='text-xs mt-6 lg:pr-16'>Find jobs on us, the jobs search app built to help you every step of the way. Get free access to millions of job postings personalize your search and submit job applications</p></div>
          <button className='border-2 mt-4 rounded-xl px-4 py-5 text-xs text-white bg-[#56BC80] md:px-6 md:py-4 ' onClick={() => router.push('/joblist')}>
            View All Jobs
          </button>
        </div>
        <div className='hidden md:flex flex-col justify-end '>
          <img src={'/banner-img.png'} alt="ellipse" />
        </div>
      </div>
    </section>
  )
}

export default About