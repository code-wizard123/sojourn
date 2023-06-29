import React from 'react'
import LoginStyles from '../css/Login.module.css'

const Login = () => {
  return (
    <div className={LoginStyles.outer}>
      <div className={LoginStyles.blur}>
        <div className={LoginStyles.black}>
          <div className={LoginStyles.img}>
            <img src='./Images/City driver-pana (1).png' className={LoginStyles.imga}></img>
          </div>
          <div className={LoginStyles.input}>
            <div className={LoginStyles.center}>
              <form >
                <h1 >Email ID</h1>
                <input type='text' className={LoginStyles.emailid} ></input>
              </form>
            </div>
            <div className={LoginStyles.center}>
              <form>
                <h1>Password</h1>
                <input type='text' className={LoginStyles.emailid} ></input>
              </form>
            </div>
          </div>
          <div className={LoginStyles.buttons}>
            <button className={LoginStyles.button}>Sign In</button>
          </div>

          <div className={LoginStyles.centr}>
            <p>Don’t know your password ?<a href='https://www.freepik.com/free-vector/travelers-concept-illustration_8793245.htm#query=tourist&position=23&from_view=keyword&track=sph'><span>Forgot password</span></a></p>
          </div>

          <div className={LoginStyles.buttons1}>
            <button className={LoginStyles.button1}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
