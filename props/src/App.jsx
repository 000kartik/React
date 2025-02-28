import React from 'react'
import Card from './component/card'

const App = () => {
  const users =[
    {
      "name": "Kartik Choudhary",
      "city": "Bhopal",
      "age": 22,
      "profession": "Full Stack Developer",
      "image": "https://example.com/images/kartik.jpg"
    },
    {
      "name": "Aman Verma",
      "city": "Mumbai",
      "age": 25,
      "profession": "Software Engineer",
      "image": "https://example.com/images/aman.jpg"
    },
    {
      "name": "Priya Sharma",
      "city": "Delhi",
      "age": 23,
      "profession": "Data Scientist",
      "image": "https://example.com/images/priya.jpg"
    },
    {
      "name": "Rahul Mehta",
      "city": "Bangalore",
      "age": 28,
      "profession": "Cyber Security Analyst",
      "image": "https://example.com/images/rahul.jpg"
    },
    {
      "name": "Neha Patel",
      "city": "Pune",
      "age": 26,
      "profession": "UI/UX Designer",
      "image": "https://example.com/images/neha.jpg"
    }
  ]
  
  


  return (
    <div>
      <div className='p-4'>
       {users.map(function(elem){
          return <h1>{elem.name}</h1>
        })}
      </div>
    </div>
  )
}

export default App
