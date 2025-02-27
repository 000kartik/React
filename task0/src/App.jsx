import React, { useState } from 'react'



const App = () => {

  const [username , setusername] = useState('')
  const [email , setemail] = useState('')
  const [imageUrl , setimageUrl] = useState('')
  const [allusers, setallusers] = useState([])


  
  const submitHanler = (e)=>{
    e.preventDefault()

    
    
    
    const copyuser = [...allusers]
    
    copyuser.push({username, email, imageUrl})
    setallusers(copyuser)



    
    setusername('')
    setemail('')
    setimageUrl('')
  }

  return (
    <div>
       <form className=' '
            
          onSubmit={(e)=>{
          submitHanler(e)
          }}>

          <input 
          value={username}
          onChange={(e)=>{
            setusername(e.target.value)
          }} 

          type="text"  
          placeholder='Enter your username' 
          className='px-2 py-2  text-xl inline-block  text-green-600' 
          
          />

          <input
          
          value={email}
          
           onChange ={(e)=>{
            setemail(e.target.value)
           }}
           type="text"
           placeholder='Enter your email'
           className='px-2 py-2  text-xl text-green-600'
           />

          <input 
          value={imageUrl}
          
          
          onChange ={(e)=>{
            setimageUrl(e.target.value)
          }}
          
          type="text" 
          placeholder='Enter image url'
          className='px-2 py-2  text-xl text-green-600'
          />

         
          <button className='bg-emerald-600 text-white border-2 px-3 rounded py-1 m-2 inline-block'>submit</button>
          

        </form>

        <div className='p-3 '>

          
      {allusers.map(function (elem, idx) {

          return <div key={idx}>
            <h2>{elem.username}</h2>
            <h4>{elem.email}</h4>
            <img src={elem.imageUrl} className='h-52' alt="" />
          </div>
        })}
      </div>

    </div>
  )
}

export default App
