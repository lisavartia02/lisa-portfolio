import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function Nav() {
  return (
    <header className='navbar flex flex-row justify-between'>
    <div className='navbar-start m-6'> <Image src='' alt='' /><Link href='/'>LOGO</Link></div>
    
    <div className='navbar-end flex flex-row gap-8 justify-end m-6'>
        <div className='px-3'>
        <Link href='/'>Home</Link>
        </div>
        <div className='px-3'>
        <Link href='/projects'>Projects</Link>
        </div>
        <div className='px-3'>
        <Link href='/'>Skills</Link>
        </div>
        <div className='px-3'>
        <Link href='/about'>About</Link>
        </div>
        <div className='px-3'>
        <Link href='/'>Contact</Link>
        </div>
    </div>

    </header>
       
    
  )
}

export default Nav