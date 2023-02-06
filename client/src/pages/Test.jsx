import React from 'react'
// import { useQuery } from "@tanstack/react-query";
import axios from "axios"

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

const test = async() => {
  
  try { 
    const res = await axios.get("/todos")
    console.log(res.data)
    return res.data

  } catch (error) {
    console.log(error);
  }

} 
const data = test()
return (
  <>
    <div>Home</div>
    <div>Response from the api : {data}</div> 
  </>
)
}

export default Test