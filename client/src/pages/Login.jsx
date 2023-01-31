import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='fullname'/>
        <input type="password" placeholder='password' />
        <button>Login</button>
        <p>There was an error!!!</p>
        <span>
          Don't Have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login