import React from 'react'
// import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const Home = () => {

  // const { isLoading, isError, error, data } = useQuery(["todos"], () =>
  //   axios.get("http://localhost:6900/api/todos").then((res) => {
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
  //   const res = await axios.get("http://localhost:6900/api/todos")
  //   console.log(res.data)
  // }
 
  return (
    // <div>Home {data}</div>s
    <>
      <div>Home</div>
      {/* <div>Response from the api : {test}</div>  */}
    </>
  )
}

export default Home