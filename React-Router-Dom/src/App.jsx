import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contect from './pages/Contect'
import Product from './pages/Product'
import Home from './pages/home'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contect' element={<Contect/>} />
          {/* daynamic routeing , nested routeing */}
        

      </Routes>

    </div>
  )
}

export default App
