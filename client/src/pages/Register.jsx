import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs,setInputs] = useState({
    full_name:"",
    email:"",
    password:"",
  })
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      const res = await axios.post("/auth/register",inputs)
      console.log(res);
      navigate("/login")
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
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='fullname' name='full_name' onChange={handleChange}/>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Already Have an Account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register