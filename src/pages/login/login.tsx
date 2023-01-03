import "./login.scss";
import React from 'react'
import union from '../../assests/Union.png'
import lend from '../../assests/lendsqr.png'
import pablo from '../../assests/pablo-sign-in 1.png'

function Login() {
 const httpSignIn = async () => {
    console.log('redirect to login')
 }
  return (
    <React.Fragment>
      <section className='login-container'>
      <div className='left'>
        <div className="logo-container">
          <img src={union} alt="union" width='30' height='25'/>
          <img src={lend} alt="lendsqr" width='100' height='35' />
        </div>
        <div className="login-icon">
          <img src={pablo} alt="pablo" />
        </div>
      </div>
      <div className='right'>
        <form onSubmit={httpSignIn} className='login-form-container'>
          <div className="login-form-title">
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
          </div>
          <div className="login-form-input">
          <input className="email" type="email" name="email" placeholder="Email" autoComplete='off'  onChange={(e)=>{console.log(e.target.value)}}/>
          <input className="password" type="password" name="password" placeholder="Password" autoComplete="off" onChange={(e)=>{console.log(e.target.value)}}/>
          </div>
          <a href='/' className="forgot-password">FORGOT PASSWORD? </a> 
          <button className="submit" type="submit" >Log In</button>
        </form>
      </div>
      </section>
    </React.Fragment>
  )
}

export default Login