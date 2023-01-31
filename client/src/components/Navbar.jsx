import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = ()=>{
    logout();
    navigate("/login")
  }
  return (
    <div className='navbar'>
      <div className='container'>
        {/* show user name and logout button */}
        <span>{currentUser?.full_name}</span>
        <span onClick={handleLogout}> Logout</span>
      </div>
      Navbar
    </div>

  )
}

export default Navbar