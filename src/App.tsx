import './App.css'
import { Login } from './pages/Login/Login'
import { CreateEmployee } from './pages/Create_Employee/CreateEmployee'
import UncontrolledLogin from './pages/Login/UncontrolledLogin'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import { Layout } from './components/Layout/Layout'

const isLoggedIn = () => {
  const token = localStorage.getItem("isLoggedIn");
  return token === "true";
};

const router = createBrowserRouter([
   {
    path:"/",
    element:isLoggedIn() ? <Navigate to="/employees" />:<Login/>,
    errorElement:<NotFound/>
  
   },
   {
    path:"/login",
    element:isLoggedIn() ? <Navigate to="/employees" />:<Login/>,
    errorElement:<NotFound/>
  },
  {
    path:"/employees",
    element:isLoggedIn() ? <Layout />:<Login />,
    children: [
      {index:true , element:<CreateEmployee/>},
      {path:"create" , element:<CreateEmployee/>}
    ]
    // errorElement:<NotFound/>

  },

  {
    path:"*",
    element :<NotFound/>
  }
])



function App() {

  return (
    <>
        <RouterProvider router={router}/>
        {/* <CreateEmployee/> */}
        {/* <UncontrolledLogin/> */}
    </>
  )

}

export default App