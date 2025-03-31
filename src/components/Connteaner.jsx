import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'


function Connteaner() {
  return (
    <div>
        <Header/>
      
        <div>
      
            <Outlet/>
        </div>
       
    </div>
  )
}

export default Connteaner