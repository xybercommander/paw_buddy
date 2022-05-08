import React from 'react'
import { Link } from 'react-router-dom'
import './signIn.css'

const SignIn = () => {
  return (
    <div>
      <div className='signUp'>
        <section className='alignment'>
          <form style={{ maxWidth: "450px", margin: "auto" }}>
            <span>
              <div className='container'>
                {/* <a href='#'>
                  <div className='arrow'></div>
                </a> */}
              </div>
            </span>
            <h2>Sign In to your account!</h2>

            <div className='input-icons'>
              <i class="fa fa-envelope icon">
              </i>
              <input className='input-field' type="email" placeholder='Enter Your Email' />
            </div>

            <div className='input-icons'>
              <i class="fa fa-key icon">
              </i>
              <input className='input-field' type="password" placeholder='Password' minLength={8} />
            </div>
            <br />
            <button className='button' > Sign In <i class="fa fa-sign-in" aria-hidden="true"></i></button>
            <p>Don't have an account? <Link to="/signUp">Create one </Link></p>
          </form>
        </section>
      </div>
    </div>
  )
}

export default SignIn