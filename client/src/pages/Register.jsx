import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='fullname'/>
        <input required type="email" placeholder='email'/>
        <input required type="password" placeholder='password' />
        <button>Register</button>
        <p>There was an error!!!</p>
        <span>
          Already Have an Account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register