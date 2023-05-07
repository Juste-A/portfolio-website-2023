import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </>
  )
}

export default App
