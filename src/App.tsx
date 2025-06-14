import './App.css'
import { Login } from './pages/Login/Login'
import { CreateEmployee } from './pages/Create_Employee/CreateEmployee'
import UncontrolledLogin from './pages/Login/UncontrolledLogin'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import { Layout } from './components/Layout/Layout'
import { EmployeeList } from './pages/EmployeeList/EmployeeList'
import { GetEmployeeById } from './pages/GetEmployee/GetEmployeeById'
import { EditEmployee } from './pages/Edit/Edit'
import { Provider } from "react-redux";
import { store } from './store/store'
import { ProfilePage } from "./pages/Profile_page/ProfilePage"

const router = createBrowserRouter([
  //  {
  //   path:"/",
  //   element:isLoggedIn() ? <Navigate to="/employees" />:<Login/>,
  //   errorElement:<NotFound/>
  
  //  },
    {
    path:"/",
    element:<Navigate to="/login" />,
    errorElement:<NotFound/>
  
   },
   {
    path:"/login",
    element:<Login/>,
    errorElement:<NotFound/>
  },
    {
    path:"/profile",
    element:<Layout />,
    children:[
      {index:true ,  element:<ProfilePage/>}
    ]
    // errorElement:<NotFound/>
  },
  {
    path:"/employees",
    element:<Layout />,
    children: [
      {index:true , element:<CreateEmployee/>},
      {path:"create" , element:<CreateEmployee/>},
      {path:"employeelist" , element:<EmployeeList/>},
      {path:":id" , element:<GetEmployeeById/>},
      {path:"edit/:id",element:<EditEmployee/>}
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
        <Provider store={store}>
              <RouterProvider router={router}/>
        </Provider>
      
        {/* <CreateEmployee/> */}
        {/* <UncontrolledLogin/> */}
    </>
  )

}

export default App