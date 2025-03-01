import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='text-xl   mt-3 mb-2  bg-amber-100 font-semibold  flex place-items-center justify-around' >
        <Link to='/course'>Courses</Link>
        <Link to ='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product' >Product</Link>

    </div>
  )
}

export default Navbar
