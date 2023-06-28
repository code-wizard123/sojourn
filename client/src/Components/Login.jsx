import React from 'react'
import '../css/Login.css'

const Login = () => {
  return (

    <div className='black'>
      <div className='blur'>
        <img src='City driver-pana (1).png' className='car'></img>

        <form className='flex'>
          <label for='email'>User ID/Email ID</label>
          <input type='text' name='email' placeholder='your username' className='user'></input>
          
        </form>

      </div>

    </div>

  )
}

export default Login
