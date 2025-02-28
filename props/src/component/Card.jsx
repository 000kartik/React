import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div >
      <div className='  bg-white rounded place-items-center   text-center inline-block flex flex-col p-4  gap-8 m-4 w-50  text-black '>
        <img className='h-20 w-20 mb-4 rounded-full' src="{props.image}" alt="" />
        <h1 className='text-semibold text-white mb-3'> {props.username} </h1>
        <h3>{props.city}, {props.age}</h3>
        <h4 className='text-xl '></h4>
        <button className='px-2 py-1 bg-blue-500 rounded' >Add Friend</button>

      </div>
    </div>
  )
}

export default Card
