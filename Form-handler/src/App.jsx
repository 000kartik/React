import React, { useState } from 'react'

const submitHandler = (e)=>{
 
  
}

const App = () => {

  const[username, setUsername] = useState('')

  return (
    <div className=''>

      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(username);
        setUsername("")
        
        
      }}>

       <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value);
          
        }}  
        className='px-2 py-2 border-amber-800 rounded text-white'
        type="text"  
        placeholder='Enter your name' />

       <button 
        className='bg-blue-500 px-1.5 py-1 m-3  border-1 rounded text-white' > submitt </button>
      </form>


    </div>
  )
}

export default App
