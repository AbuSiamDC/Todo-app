import React from 'react'
// import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Test = () => {
//   const { isLoading, isError, error, data } = useQuery(["todos"], () =>
//   axios.get("/todos").then((res) => {
//     return res.data;
//   })
// );

// if (isLoading) {
//   return <span>Loading...</span>
// }

// if (isError) {
//   return <span>Error: {isError.message}</span>
// }

// if (error) {
//   return <span>Error: {error.message}</span>
// }

// console.log(data)

// const test = async() => {
  
//   try { 
//     const res = await axios.get("/todos")
//     console.log(res.data)
//     return res.data

//   } catch (error) {
//     console.log(error);
//   }
// } 
// const data = test()

const { currentUser } = useContext(AuthContext);

const [todos,setTodos] = useState([])

  useEffect(()=>{
    const fetchAllTodos = async ()=>{
        try {
            const res = await axios.get("/todos")
            setTodos(res.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllTodos()
  },[])


  return (
    // <>
    //   <div>Home</div>
    //   <div>Response from the api : {todos}</div> 
    // </>
    <div className="todos">
      <div className="container">

        <h2>{currentUser?.full_name}s TODO list</h2>

        <form className="todoForm"action="">
          <input type="text" />
          <button>Add</button>
        </form>

        <ul>
          {todos.map(todo => 
            <div key={todo.id}>


            <li>
              <span className='todoText'>{todo.text_body}</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>

            </div>  
          )}
        </ul>

        
      </div>
    </div>
    
  )
}

export default Test