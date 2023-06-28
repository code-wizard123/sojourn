import React from 'react'
import '../css/Login.css'

const Login = () => {
  return (
    <div className='blur'>
      <div className='black'>
        <div className='img'>
          <img src='City driver-pana (1).png' className='imga'></img>
        </div>
        <div className='input'>
          <form>
            <h1>Email ID</h1>
            <input type='text' className='emailid' ></input>
          </form>
          <form>
            <h1>Email ID</h1>
            <input type='text' className='emailid' ></input>
          </form>
        </div>
        <div className='buttons'>
        <button class="button">Button</button>
        </div>
      </div>
    </div>


  )
}

export default Login
