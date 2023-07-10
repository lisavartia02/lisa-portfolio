import React from 'react'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Hero() {
        useEffect(() => {
            Aos.init({ duration: 2000 });
        }, []);


  return (
    <div className='text-center'>
        <h1 data-aos="fade-up"  className='text-gray-200 text-center pt-48 text-7xl font-bold lg:text-8xl'>Lisa Vartia <br/>Design. Code. Create.</h1>
        <p data-aos="zoom-in" data-aos-duration="3500" className='mt-10'>Building Seamless Front-End Solutions that <br />Merge Artistic Design with Cutting-Edge Technology.</p> 
        <button className='bg-slate-700 px-4 py-3 mt-10'>View my work</button>
    

    </div>
  )
}

export default Hero