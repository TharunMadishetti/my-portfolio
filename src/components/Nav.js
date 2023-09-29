import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <div className='fixed  h-20 w-full top-0  bg-black flex items-center font-bold '>
          <section className='w-full flex justify-around md:justify-evenly text-base md:text-lg'>

          <Link 
          to='/' 
          key='home'  
          className='underline decoration-green-500 decoration-2 hover:decoration-purple-600 hover:decoration-4'>
            Home
          </Link>

          <Link 
          to='Projects' 
          key='projects' 
          className='underline decoration-green-500 decoration-2 hover:decoration-purple-600 hover:decoration-4'>
            Projects
          </Link>

          <Link 
          to='About' 
          key='about' 
          className='underline decoration-green-500 decoration-2 hover:decoration-purple-600 hover:decoration-4'>
            About
          </Link>

          </section>
      </div>
  )
}

export default Nav