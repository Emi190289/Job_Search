import React from 'react'
import Navbarr from "@/components/Navbarr";
import About from "@/components/About";
import Footer from '@/components/Footer'
import Feature from "@/components/Feature";
import Latest from "@/components/Latest";
import Review from '@/components/Review'
import Register from "@/components/Register";

const Homepage = () => {
  return (
    <div>
      <Navbarr />
      <About />
      <Feature />
      <Latest />
      <Review />
      <Register />
      <Footer />
    </div>
  )
}

export default Homepage