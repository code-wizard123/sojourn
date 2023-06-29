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
          <div className='center'>
          <form >
            <h1 >Email ID</h1>
            <input type='text' className='emailid' ></input>
          </form>
          </div>
          <div className='center'>
          <form>
            <h1>Email ID</h1>
            <input type='text' className='emailid' ></input>
          </form>
        </div>
        </div>
        <div className='buttons'>
        <button class="button">Sign In</button>
        </div>

        <div className='centr'>
          <p>Don’t know your password ?<a href='https://www.freepik.com/free-vector/travelers-concept-illustration_8793245.htm#query=tourist&position=23&from_view=keyword&track=sph'><span>Forgot password</span></a></p>
        </div>

        <div className='buttons1'>
        <button class="button1">Register</button>
        </div>
      </div>
    </div>


  )
}

export default Login
