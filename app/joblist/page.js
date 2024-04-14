'use client'
import React, { useEffect, useState, FormEvent } from 'react'
import { CiSearch } from "react-icons/ci";
import Footer from '@/components/Footer';
import Navbarr from '@/components/Navbarr';
import Image from 'next/image';

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState();
  const [formData, setFormData] = useState({
    keyword: 'Marketing',
    category: 'Marketing'
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  async function onSubmit(event) {
    event.preventDefault();
    setupData();
    // ...
  }
  React.useEffect(() => {
    setupData();
  }, []);

  const setupData = async () => {
    const response = await fetch('/api/jobs?' + new URLSearchParams({
      keyword: formData.keyword,
      category: formData.category.toLowerCase(),
      count: 10
    }), {
      method: 'GET',
    })

    // Handle response if necessary
    const data = await response.json();
    setJobs(data.jobs);
  };
  return (
    <div>
      <Navbarr />
      <div className='bg-[#56BC80] py-[60px] '>
        <div className='max-w-screen-xl mx-auto'>
          <form onSubmit={onSubmit}>
            <div className='text-white text-4xl me-10'>
              Search Jobs
            </div>
            <div className='max-w-screen-md flex items-center'>

              <div className=' bg-white p-3 rounded-lg flex items-center px-10 py-4 h-[100px] ' >
                <div className='flex flex-col'>
                  <label className='text-xs text-semibold'>Keywords</label>
                  <input onChange={handleChange} className='text-xs basis-3/4 font-light focus:outline-none  inline md:mr-2' placeholder='Search jobs,skills' name='keyword' type='text' />
                </div>
                <div className='flex flex-col'>
                  <label>Category</label>
                  <select className='text-sm' name='category' onChange={handleChange} value={formData.category}>
                    <option value={'marketing'}>Marketing</option>
                    <option value={'data-science'}>Data Science</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label>Location</label>
                  <select className='text-sm' name='category' onChange={handleChange} value={formData.category}>
                    <option value={'marketing'}>Marketing</option>
                    <option value={'data-science'}>Data Science</option>
                  </select>
                </div>
              </div>
              <button className='border-2 px-4 py-2 text-white bg-[#56BC80] ml-4 rounded-lg text-sm'>Find Jobs</button>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-[#f1f1f1] py-[60px] pt-10'>
        <div className='max-w-screen-xl mx-auto'>
          <p className='text-2xl font-semibold mb-10'>Jobs List</p>
          <div className='md:grid md:grid-cols-1 gap-5 '>
            {jobs && jobs.length > 0 && jobs.map(job => (

              <ul key={job.id} className='rounded-xl shadow-xl bg-white text-black py-5 px-10  '>

                <li className='text-lg font-semibold mt-2'>
                  {job.jobTitle}
                </li>
                <li className='text-sm font-semibold mt-2'>
                  {job.companyName}
                </li>
                <li className=' my-2'>
                  <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded p-4'>{job.jobType}</span>
                </li>
                <li><small dangerouslySetInnerHTML={{ __html: job.jobExcerpt }}></small></li>
                <li className='text-xs mt-2'>Job Location: <em>{job.jobGeo}</em></li>
                <li className='text-right'><button className=' text-xs py-2 px-4 rounded-lg text-white bg-[#56BC80] mt-2'>Apply Here</button></li>
              </ul>
            ))}
          </div>
        </div>
      </div>



      <Footer />
    </div >
  )
}
export default Page