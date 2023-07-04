import React from 'react'
import LoginDStyles from '../css/LoginD.module.css'

const LoginD = () => {
  return (
    <div className={LoginDStyles.outer}>
      <div className={LoginDStyles.blur}>
        <div className={LoginDStyles.black}>
          <div className={LoginDStyles.img}>
            <img src='./Images/car-login.png' className={LoginDStyles.imga}></img>
          </div>
          <form>
            <div className={LoginDStyles.input}>
              <div className={LoginDStyles.center}>
                <h1 className={LoginDStyles.label}>Email ID</h1>
                <input type='text' className={LoginDStyles.emailid} ></input>
              </div>
              <div className={LoginDStyles.center}>
                <h1 className={LoginDStyles.label}>Password</h1>
                <input type='text' className={LoginDStyles.emailid} ></input>
              </div>
            </div>
            <div className={LoginDStyles.buttons}>
              <button className={LoginDStyles.button}>Sign In</button>
            </div>

            <div className={LoginDStyles.centr}>
              <p className={LoginDStyles.forgotpass}>Don’t know your password ? <a href='https://www.freepik.com/free-vector/travelers-concept-illustration_8793245.htm#query=tourist&position=23&from_view=keyword&track=sph'><span>Forgot password</span></a></p>
            </div>

            <div className={LoginDStyles.buttons1}>
              <button className={LoginDStyles.button1}>Register</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginD
