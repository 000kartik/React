import React from 'react'
import { useState } from 'react'



const App = () => {

  const [songname, setsongname] = useState('')
  const[songalbum, setsongalbum] = useState('')
  const[songArtist, setsonArtist] = useState('')
  const[songImage,setsongImage] = useState('')
  const [alldata, setalldata] = useState([])
  
  const submiteHandler = (e)=>{
    e.preventDefault()


    const copysongs =[...alldata]
    copysongs.push({songArtist, songImage, songalbum, songname})
    setalldata(copysongs)
   

    setsongImage('')
    setsongalbum('')
    setsongname('')
    setsonArtist('')

    
  }

  const deleteHandler = (idx)=>{
    
    const copysongs =[...alldata]
    copysongs.splice(idx,1)
    setalldata(copysongs)
  }



  return (
    <div>
      <form onSubmit={(e)=>{
        submiteHandler(e)
      }} >
        
        <input
        onChange={(e)=>{
          setsongname(e.target.value)
        }}
        type="text" 
        placeholder='Enter song name' 
        value={songname} 
        className='text-black px-2 py-1 m-4 border-2 m rounded bg-amber-50' />

        <input type="text"
        onChange={(e)=>{
          setsongalbum(e.target.value)
        }} 
        placeholder='Enter albume name' 
        value={songalbum} 
        className='text-black px-2 py-1 m-4 border-2 m rounded bg-amber-50' />

        <input type="text" 
         onChange={(e)=>{
          setsonArtist(e.target.value)
        }} 
        placeholder='Enter song Artist' 
        value={songArtist} 
        className='text-black px-2 py-1 m-4 border-2 m rounded bg-amber-50' />

        <input type="url" 
         onChange={(e)=>{
          setsongImage(e.target.value)
        }} 
        placeholder='Enter song image' 
        value={songImage} 
        className='text-black px-2 py-1 m-4 border-2 m rounded bg-amber-50' />

        <button className='px-2 py-1 bg-blue-500 text-xl text-white'>Submit</button>

      </form>

      <div >

        {alldata.map(function(elem, idx){

          return <div className='flex items-center  p-3 bg-white w-72 h-48 mt-12' key={idx}>
           <div>
                <h2> {elem.songname} </h2>
                <h3> {elem.songArtist} </h3>
                <h4>{elem.songalbum}</h4>

                <img src={elem.songImage} 
                className='h-20' alt="" />
           </div>

            <button onClick={()=>{
              deleteHandler(idx)
            }} 
            
            className='bg-red-500 text-white px-2 py-1.5 rounded border-2xl' >Delete Song</button>
             
          </div>
        })}

      </div>
    </div>
  )
}

export default App
