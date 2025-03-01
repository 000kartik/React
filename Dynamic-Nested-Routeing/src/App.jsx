import React from 'react'
import {Route ,Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './component/Navbar'
import Courses from './pages/Courses'
import Boys from './pages/boys'
import Girls from './pages/girls'
import Randomecourse from './pages/Randomecourse'
import Error from './pages/Error'

const App = () => {
  return (
    <div>   

      <Navbar/>
      <Routes>
        <Route path='/course' element={<Courses/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product'element={<Product/>}  />

        {/* Nested Routeing */}
        <Route path='/product/boys' element={<Boys/>} />
        <Route path='/product/girls' element={<Girls/>} />
        {/* Dynamic Routeing */}
        <Route path='/course/:id' element={<Randomecourse/>} />
          {/* Error pages */}
        <Route path='/*' element = {<Error Page/>}/>

      </Routes>
    </div>
  )
}

export default App
