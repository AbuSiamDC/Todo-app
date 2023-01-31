import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Login = () => {

  const [inputs,setInputs] = useState({
    email:"",
    password:"",
  })
  const [error, setError] = useState(null)

  const { login } = useContext(AuthContext);


  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      // const res = await axios.post("/auth/login",inputs)
      // console.log(res);
      await login(inputs)
      navigate("/")
    } catch (error) {
      setError(error.response.data)
      console.log(error);
    }
  }
  console.log(inputs);
  const handleChange = (event) =>{
    setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <form>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't Have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
  // return (
  //   <div className='login'>
  //     <h1>Login</h1>
  //     <form>
  //       <input type="text" placeholder='fullname'/>
  //       <input type="password" placeholder='password' />
  //       <button>Login</button>
  //       <p>There was an error!!!</p>
  //       <span>
  //         Don't Have an Account? <Link to="/register">Register</Link>
  //       </span>
  //     </form>
  //   </div>
  // )
}

export default Login