import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <>
    <section className='signin'>
 <div className='container mt-5'>
     <div className='signin-content'>
     
         <div className='signin-form'>
             <h2 className='form-title'>Sign in</h2>
             <form className='register-form' id='register-form'>

                 <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' />

                 <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' />

                 <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
             </form>
 
         </div>
         <div>
     <NavLink to="/login"className="signin-im-link">Creat An Account</NavLink>
 </div>
 
     </div>
 </div>
    </section>
    </>
  )
}

export default Login
