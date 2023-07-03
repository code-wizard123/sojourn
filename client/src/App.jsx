import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Landing from './Components/Landing'
import LoginD from './Components/LoginD'
import './App.css'


const App = () => {
  return (
    <div className='container-all'>
      <Router>
        <Routes>
          <Route element={<Landing />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<LoginD />} path='/loginD'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

