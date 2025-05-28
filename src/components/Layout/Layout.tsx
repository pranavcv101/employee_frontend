import React from 'react'

import './Layout.css'
import { Aside } from '../Aside/Aside'
import { Outlet } from 'react-router-dom'

export const Layout=({
    children
    // ,sidebar,header
}:
    {children?:React.ReactNode 
        // , sidebar:string,header:string
    }) => {
        return     ( <div className="flex-container">
                    <Aside sidebar = "Employee List"/>
                    
                    <main>
                        <div className='formhead'>
                            Create Employee
                        </div>
                        <div>
                            <Outlet/>
                            {/* {children} */}
                        </div>
                    </main>
                </div>
        )
    }