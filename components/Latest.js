'use client'
import Image from 'next/image';
import React from 'react'

const Latest = () => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    async function fetchJobs() {
      const res = await fetch('/api/jobs?' + new URLSearchParams({
        keyword: 'marketing',
        category: 'marketing',
        count: 6
      }), {
        method: 'GET',
      })
      const data = await res.json();
      setJobs(data.jobs);
    }

    fetchJobs();
  }, []);

  return (
    <div className='bg-[#56BC80] text-white py-10'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='md:grid md:grid-cols-2 py-6'>
          <div className='text-left text-4xl font-bold'>Latest Jobs Here</div>
          <a className='text-right text-lg' href='/joblist'>View All Jobs</a>
        </div>
        <div className='md:grid md:grid-cols-3 gap-5'>
          {jobs && jobs.map(job => (

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
              <li><small dangerouslySetInnerHTML={{ __html: job.jobExcerpt }}></small></li>
              <li className='text-xs mt-2'>Job Location: <em>{job.jobGeo}</em></li>
              <li><button className=' text-xs px-2 py-1 border-2 rounded-xl text-[#56BC80] mt-2 border-green-400'>Apply Here</button></li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Latest