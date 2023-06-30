import React from 'react'
import LoginDstyles from '../css/LoginD.module.css'

const LoginD = () => {
  return (
    <div className={LoginDstyles.outer}>
      <div className={LoginDstyles.blur}>
        <div className={LoginDstyles.black}>
          <div className={LoginDstyles.img}>
            <img src='./Images/Digital_nomad-pana.png' className={LoginDstyles.imga}></img>
          </div>
          <form>
            <div className={LoginDstyles.input}>
              <div className={LoginDstyles.center}>
                <h1 >Email ID</h1>
                <input type='text' className={LoginDstyles.emailid} ></input>
              </div>
              <div className={LoginDstyles.center}>
                <h1>Password</h1>
                <input type='text' className={LoginDstyles.emailid} ></input>
              </div>
            </div>
            <div className={LoginDstyles.buttons}>
              <button class={LoginDstyles.button}>Sign In</button>
            </div>

            <div className={LoginDstyles.centr}>
              <p>Don't know your password ?<a href="#"><span>Forgot password</span></a></p>
            </div>

            <div className={LoginDstyles.buttons1}>
              <button class={LoginDstyles.button1}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default LoginD
