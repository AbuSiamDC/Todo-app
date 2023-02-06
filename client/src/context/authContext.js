import { useState } from "react";
import { createContext } from "react";
// import { createContext } from "react";
import axios from "axios"
import { useEffect } from "react";
//test----------------------------------------------
// import { Navigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
//test---------------------------------------------------------------

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
     
    //test---------------------------------------------------------------
    // const navigate = useNavigate()
    //test---------------------------------------------------------------
    // const test = () =>{
    //     console.log("this auth test funciton ", currentUser);
    // }
    const login = async (inputs) => {
        const res = await axios.post("/auth/login",inputs, {
            // withCredentials: true, 
        });
        // console.log("inside authContext before res.data", res.data);
        setCurrentUser(res.data)
        const l = localStorage.getItem("user")
        console.log("localStorage ", l);
        // console.log("inside authContext after res.data", res.data);
        // console.log("inside authContext", currentUser);
        // test()
        // return <Navigate to={"/"}/>
        // navigate("/")
    };

    const logout = async (inputs) => {
        await axios.post("/auth/logout")
        setCurrentUser(null)
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
        // navigate("/")
        console.log("inside use effect",currentUser);
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

