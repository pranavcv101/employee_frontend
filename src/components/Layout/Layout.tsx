import React from 'react'

import './Layout.css'
import { Aside } from '../Aside/Aside'
import { Navigate, Outlet } from 'react-router-dom'

export const Layout=({
    children
    // ,sidebar,header
}:
    {children?:React.ReactNode 
        // , sidebar:string,header:string
    }) => {

        function isLoggedIn(){
            const token = window.localStorage.getItem("token");
            if(token)
                return true;
        }

        if(!isLoggedIn()){
            return <Navigate to="/login"/>
        }
        return     (
            <div className="flex-container">
                    <Aside sidebar = "Employee List"/>
                    
                    <main className='main'>
                         <Outlet/>
                        {/* {children} */}
                        
                    </main>
                </div>
        )
    }