import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className=' bg-slate-200 '>
      <div className='max-w-screen-xl mx-auto'>
        <div className='mt-10 px-6 pt-6 lg:grid lg:grid-cols-3'>
          <div>
            <Image src={'/logo1.png'} width={60} height={50} alt="logo" />
            <p className='text-xs leading-6 mt-6 lg:pr-20'>Find jobs on us, the job search app built to help you every step of the way. Get free access to millions of job postings personalize your search and submit job applications</p>
          </div>
          <div className='flex mt-8'><div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Discover</p>
            <Link href='/howitworks' className='block'>How it Works</Link>
            <Link href='/HomeforBusiness' >Home for Business</Link>
            <Link href='/EarnMoney' className='block'>Earn Money</Link>
            <Link href='/NewUserFAQ'>New User FAQ</Link>
          </div>
            <div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Company</p>
              <Link href='/AboutUS'>About US</Link>
              <Link href='/Careers' className='block'>Careers</Link>
              <Link href='/Terms&Conditions' className='block'>Terms & Conditions</Link>
              <Link href='/Blog' className='block'>Blog</Link>
              <Link href='/ContactUs' className='block'>Contact Us</Link>
              <Link href='/PrivacyPolicy' className='block'>Privacy Policy</Link>
              <Link href='/Investors' className='block'>Investors</Link>
            </div></div>
          <div className='flex mt-8'> <div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Exisiting Members</p>
            <Link href='/PostaTask' className='block'>Post a Task</Link>
            <Link href='/BrowseTasks' className='block'>Browse Tasks</Link>
            <Link href='/Login' className='block'>Login</Link>
            <Link href='/SupportCentre' className='block'>Support Centre</Link>
            <Link href='/Merchandise' className='block'>Merchandise</Link>
          </div>
            <div className='text-xs leading-6 basis-1/2'><p className='font-semibold text-sm mb-4'>Popular Categories</p>
              <Link href='/HandymanServices' className='block'>Handyman Services</Link>
              <Link href='/CleaningServices' className='block'>Cleaning Services</Link>
              <Link href='/DeliveryServices' className='block'>Delivery Services</Link>
              <Link href='/Removalists' className='block'>Removalists</Link>
              <Link href='/GardeningServices' className='block'>Gardening Services</Link>
              <Link href='/Automative' className='block'>Automative</Link>
              <Link href='/AssemblyServices' className='block'>Assembly Services</Link>
              <Link href='/All Services' className='block'>All Services</Link>
            </div></div>

        </div>
        <div className='mt-10  text-xs text-center'>©️All rights reserved</div>
      </div>
    </section>
  )
}

export default Footer