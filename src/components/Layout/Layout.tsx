import React from 'react'

import './Layout.css'
import { Aside } from '../Aside/Aside'

export const Layout=({children,sidebar,header}:
    {children:React.ReactNode , sidebar:string,header:string}) => {
        return      <div className="flex-container">
                    <Aside sidebar = {sidebar}/>
                    <main>
                        <div className='formhead'>
                            {header}
                        </div>
                        <div>
                            {children}
                        </div>
                    </main>
                </div>
    }