import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useEffect } from 'react'

const Login = () => {

  const [inputs,setInputs] = useState({
    email:"",
    password:"",
  })
  const [error, setError] = useState(null)

  const { currentUser, login } = useContext(AuthContext);


  const navigate = useNavigate()

  // const test = () => {
  //   console.log("inside from Login comp test function", currentUser);
  //   if (currentUser) navigate("/")
  // }
  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      // const res = await axios.post("/auth/login",inputs)
      // console.log(res);
      //  login(inputs)
      await login(inputs)
      // test()
      // setTimeout(() => {
      //   console.log("hkdjsfhakjsdhfkjalsdhflkasd");
      //   navigate("/")
      //   console.log("after 5 second", currentUser);
      // }, 5000);
      console.log("before navigate inside login function",currentUser);
      navigate("/")
      // navigate("/") //! This would run immediately and does not wait for the login to finish as we are using await... but i our App.js we are using a protected rount and we check if there is any current user (which is inside our authcontext) and if not then we redirect to login page not not let user go to any of the protected pages...but when we do login since we are tyring to go to the home page right away it gets blocked by out protected route check that is because out login process still has not finished which meand out current users are still not set insife authcontex and for this reason after we try to log in we are not immediatly redirected to the home page

    } catch (error) {
      setError(error.response.data)
      console.log(error);
    }
  }
  useEffect(()=>{  //THis finally fixed the problem... yeaaaa.... after 6 long hours -_- (so amr mote jeta hoice... jokhon first time login korete jai tokhon amader protected route dekhe te ekhn o amader authcontex e currentUser null to o abr amader login ai patahi dei...but ami login e useeffet dia rakci so jokhon o useffet e dekhe je amader curretUsers ekhn thik e set ace o amader home e navigate kore nia jai )
    console.log("Login inside use effect",currentUser);
    if (currentUser) navigate("/")
},[currentUser])

  // const handleSubmit = (event) =>{
  //   event.preventDefault()
  //   try {
  //     // const res = await axios.post("/auth/login",inputs)
  //     // console.log(res);
  //     //  login(inputs)
  //     login(inputs).then( () => navigate("/"))
     
  //   } catch (error) {
  //     setError(error.response.data)
  //     console.log(error);
  //   }
  // }

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