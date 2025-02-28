import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div className='nav  text-white bg-yellow-500 w-full' >
            {/* <a href="/"> Home </a>
            <a href="/product">Product </a>
            <a href="/contect"> Content </a> */}

          
            <Link to='/'>Home</Link>
            <Link to= '/contect'>Contect</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar
