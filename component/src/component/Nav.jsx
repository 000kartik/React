import React from 'react'
import Right from './Right'
import Left from './Left'

const Nav = () => {
  return (
    <div className='bg-red-500 w-full h-20pxv flex  place-content-between m- ' >
      <Left/>
      <Right/>

    </div>
  )
}

export default Nav
