import React from 'react'
import LoginStyles from '../css/Login.module.css'

const Login = () => {
  return (
    <div className={LoginStyles.outer}>
      <div className={LoginStyles.blur}>
        <div className={LoginStyles.black}>
          <div className={LoginStyles.img}>
            <img src='./Images/Digital_nomad-pana.png' className={LoginStyles.imga}></img>
          </div>
          <form>
          <div className={LoginStyles.input}>
            <div className={LoginStyles.center}>
                <h1 className={LoginStyles.label}>Email ID</h1>
                <input type='text' className={LoginStyles.emailid} ></input>
            </div>
            <div className={LoginStyles.center}>
                <h1 className={LoginStyles.label}>Password</h1>
                <input type='text' className={LoginStyles.emailid} ></input>
            </div>
          </div>
          <div className={LoginStyles.buttons}>
            <button className={LoginStyles.button}>Sign In</button>
          </div>

          <div className={LoginStyles.centr}>
            <p className={LoginStyles.forgotpass}>Don’t know your password ? <a href='https://www.freepik.com/free-vector/travelers-concept-illustration_8793245.htm#query=tourist&position=23&from_view=keyword&track=sph'><span>Forgot password</span></a></p>
          </div>

          <div className={LoginStyles.buttons1}>
            <button className={LoginStyles.button1}>Register</button>
          </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
