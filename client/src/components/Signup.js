import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
function Signup() {
  return (
   <>
   <section className='signup'>
<div className='container mt-5'>
    <div className='signup-content'>
        <div className='signup-form'>
            <h2 className='form-title'>Sign up</h2>
            <form className='register-form' id='register-form'>
                <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name' />
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' />
                <input type="number" name='phone' id='phone' autoComplete='off' placeholder='Your phone' />
                <input type="text" name='work' id='work' autoComplete='off' placeholder='Your Profession' />
                <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' />
                <input type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder='Conform Your Password' />
                <input type="submit" name="signup" id="signup" className="form-submit" value="register" />
            </form>
<div>
    <NavLink to="/login"className="signup-im-link">Iam already register</NavLink>
</div>
        </div>

    </div>
</div>
   </section>
   </>
  )
}

export default Signup
