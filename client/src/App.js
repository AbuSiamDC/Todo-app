import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Test from "./pages/Test";
import "./style.scss"

import { useContext } from "react";
import { AuthContext } from './context/authContext'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



// const ProtectedRoutes = ({children}) => {
//   const { currentUser } = useContext(AuthContext);
//   if (!currentUser) {
//     return <Navigate to={"/login"}/>
//   }
//   return children
// }

// const Layout = () => {
//   return(
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:
//       <ProtectedRoutes>
//         <Layout />
//       </ProtectedRoutes>
//     ,
//     children:[
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path: "/test",
//         element: <Test />
//       },
//     ]
//   },
//   {
//     path:"/register",
//     element: <Register/>
//   },
//   {
//     path:"/login",
//     element: <Login/>
//   }
// ]);

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <RouterProvider router={router} />
//       </div>
//     </div>
//   );
// }




function App() {
  const { currentUser } = useContext(AuthContext);
  let i = 1
  const ProtectedRoutes = ({children}) => {
    console.log(`run number ${i}`,currentUser);
    i++
    if (!currentUser) {
      return <Navigate to={"/login"}/>
      // return <Navigate to={"/register"}/>
    }
    return children
  }
  
  const queryClient = new QueryClient()
  
  const Layout = () => {
    return(
      <QueryClientProvider client={queryClient}>
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      </QueryClientProvider>
    );
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/test",
          element: <Test />
        },
      ]
    },
    {
      path:"/register",
      element: <Register/>
    },
    {
      path:"/login",
      element: <Login/>
    }
  ]);
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
