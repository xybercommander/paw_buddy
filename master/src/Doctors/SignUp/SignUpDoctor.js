import React from 'react'
import { Link } from 'react-router-dom'
import '../../Components/SignUp/signUp.css'

const SignUpDoctor = () => {
    return (
        <div className='signUp'>
            <section className='alignment'>
                <form style={{ maxWidth: "450px", margin: "auto" }}>
                    <span>
                        {/* <div className='container'>
                            <a href='#'>
                                <div className='arrow'></div>
                            </a>
                        </div> */}
                    </span>
                    <h2>Sign Up !</h2>
                    <div className='input-icons'>
                        <i class="fa fa-user icon">
                        </i>
                        <input className='input-field' type="text" placeholder='Enter Your Name' />
                    </div>

                    <div className='input-icons'>
                        <i class="fa fa-envelope icon">
                        </i>
                        <input className='input-field' type="email" placeholder='Enter Your Email' />
                    </div>

                    <div className='input-icons'>
                        <i class="fa fa-address-book icon">
                        </i>
                        <input className='input-field' type="text" placeholder='Contact Number' />
                    </div>

                    <div className='input-icons'>
                        <i class="fa fa-key icon">
                        </i>
                        <input className='input-field' type="password" placeholder='Password' minLength={8} />
                    </div>
                    <br />
                    <button className='button' > Sign Up <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    <p>Already have an account? <Link to="/signIn">Sign In</Link></p>

                </form>
            </section>
        </div>
    )
}

export default SignUpDoctor