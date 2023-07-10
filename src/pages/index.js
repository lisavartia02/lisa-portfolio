import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/home/Hero'
import Subhero from '@/components/home/Subhero'

function index() {
  return (
    <div className='bg-[#140F1D]'>
    <Nav/>
    <Hero/>
    <Subhero/>
    </div>
  )
}

export default index