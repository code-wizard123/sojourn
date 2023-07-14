import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Landing from './Components/Landing'
import LoginD from './Components/LoginD'
import Home from './Components/Home'
import Booking from './Components/Booking'
import './App.css'



const App = () => {
  return (
    <div className='container-all'>
      <Router>
        <Routes>
          <Route element={<Landing />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Home />} path='/home' />
          <Route element={<Booking />} path='/booking' />
        </Routes>
      </Router>
    </div>
  )
}

export default App

