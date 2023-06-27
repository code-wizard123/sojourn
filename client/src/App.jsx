import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Landing from './Components/Landing'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact element={<Landing />} path='/' />
          <Route exact element={<Login />} path='/login' />
        </Routes>
      </Router>
    </div>
  )
}

export default App

