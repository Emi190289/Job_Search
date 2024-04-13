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
}, []);    
  
const handleChange = (event) =>{
    setSearch(event.target.value)
    
}      
    return (   
      <div>
        <Navbarr />
       
            <div className='grid grid-cols-1 m-10 md:grid-cols-2 '>
        <div className='border-2 bg-white p-3 rounded-lg flex items-center  px-6 py-4 sm:mx-16 md:mr-0  md:px-0 md:py-0 ' >
          <CiSearch className='basis-1/4  '/>
          <input className='text-xs basis-3/4 font-light focus:outline-none  inline ' placeholder='Search jobs,skills' type='search'  onChange={handleChange}></input></div>
       
        <button className='border-2 p-3 text-white bg-[#56BC80] m-6 rounded-lg text-sm sm:mx-24 md:mx-16 '>Find Jobs</button>
        </div>
        <div className='sm:grid sm:grid-cols-2 md:grid-cols-3'>
    { jobs && jobs.filter((job)=>{
            return search.toLowerCase() === '' 
            ? job
            : job.jobTitle.toLowerCase().includes(search)
    })
    
              .map(job => (             
                 <ul key={job.id} className='border-2 rounded-lg bg-white text-black m-4 p-4 '>
                 <li  className='mt-2'><Image src={'/Ellipse1.png'} height={50} width={50} alt="ellipse 1"></Image></li>
               <li className='border-2 text-red-500 text-xs bg-red-100 mt-2 p-1 rounded-lg w-fit'>{job.jobType}</li>
               <li  className='text-sm font-semibold mt-2'>{job.jobTitle}</li>
               <li className='text-xs mt-2'>{job.jobGeo}</li>
               <li><button className=' text-xs px-2 py-1 border-2 rounded-xl text-[#56BC80] mt-2 border-green-400'>Apply Here</button></li>
               </ul>
            
             ))}
          </div>
        
      <Footer />
      </div>
    )
    }
export default page