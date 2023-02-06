import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

// -------------------------------------------------------------Test
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useEffect } from 'react'
// -------------------------------------------------------------Test

const Register = () => {
  const [inputs,setInputs] = useState({
    full_name:"",
    email:"",
    password:"",
  })
  const [error, setError] = useState(null)

  // -------------------------------------------------
  const { currentUser } = useContext(AuthContext);
  // -------------------------------------------------

  const navigate = useNavigate()

  useEffect(()=>{  //THis finally fixed the problem... yeaaaa.... after 6 long hours -_- (so amr mote jeta hoice... jokhon first time login korete jai tokhon amader protected route dekhe te ekhn o amader authcontex e currentUser null to o abr amader login ai patahi dei...but ami login e useeffet dia rakci so jokhon o useffet e dekhe je amader curretUsers ekhn thik e set ace o amader home e navigate kore nia jai )
    console.log("Login inside use effect",currentUser);
    if (currentUser) navigate("/") //and also ... if we are logged in then it wont also let us login again
})

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