import React from 'react'
import { useParams } from 'react-router-dom'

const Randomecourse = () => {
  
   const {id} = useParams()
   console.log(id);
   

  return (

    <div>
       <h1 className=' text-center text-2xl font-semibold font-stretch-ultra-expanded' >{id}  Courses Pages.</h1>
    </div>
  )
}

export default Randomecourse
 