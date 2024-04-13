'use client'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Footer from '@/components/Footer';
import Navbarr from '@/components/Navbarr';
import Image from 'next/image';

const page = () => {
    const [jobs, setJobs] = useState([]);
    const [search,setSearch] = useState('')
    React.useEffect(() => {
  async function fetchJobs() {
    const res = await fetch('/api');
    const data = await res.json();
    setJobs(data.jobs); 
  }  fetchJobs();
}, [jobs]);    
  
const handleChange = (event) =>{
    setSearch(event.target.value)
    
}      
    return (   
      <div>
        <Navbarr />
       
            <div className='grid grid-cols-1 m-10  md:grid-cols-3 md:items-center md:gap-2'>
              <label className='hidden md:inline md:justify-self-end md:text-sm'>Jobs or Keywords</label>
        <div className='border-2 bg-white p-3 rounded-lg flex items-center  px-6 py-4 sm:mx-16 md:border-none md:mx-0 md:px-0 md:ml-4' >

          <CiSearch className='basis-1/4 md:hidden '/>
          <input className='text-xs basis-3/4 font-light focus:outline-none  inline md:justify-self-center md:border-2 md:p-4 md:rounded-lg  md:px-4 md:py-4' placeholder='Search jobs,skills' type='search'  onChange={handleChange}></input></div>
       
        <button className='border-2 p-3 text-white bg-[#56BC80] m-6 rounded-lg text-sm sm:mx-24 md:mx-8 md:p-4 md:justify-self-start md:px-10'>Find Jobs</button>
        </div>
        <div className='bg-[#56BC80] sm:grid sm:grid-cols-2 grid grid-cols-1  p-4 md:grid md:grid-cols-3 gap-5'>
    { jobs && jobs.filter((job)=>{
            return search.toLowerCase() === '' 
            ? job
            : job.jobTitle.toLowerCase().includes(search)
    })
    
              .map(job => (             
                <ul key={job.id} className='rounded-xl shadow-xl bg-white text-black py-5 px-10  '>
                <li className='mt-2'>
                  <img src={job.companyLogo} className='max-w-[40px]' />
                </li>
                <li className=' my-2'>
                  <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded p-4'>{job.jobType}</span>
                  </li>
                <li className='text-sm font-semibold mt-2'>
                  {job.jobTitle}
                </li>
                <li><small dangerouslySetInnerHTML={{__html: job.jobExcerpt }}></small></li>
                <li className='text-xs mt-2'>Job Location: <em>{job.jobGeo}</em></li>
                <li><button className=' text-xs px-2 py-1 border-2 rounded-xl text-[#56BC80] mt-2 border-green-400'>Apply Here</button></li>
              </ul>
            
             ))}
          </div>
        
      <Footer />
      </div>
    )
    }
export default page