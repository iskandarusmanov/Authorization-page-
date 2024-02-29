import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthSidebar from '../UI/AuthSidebar'
import './Layouts.scss'

export default function AuthLayout() {
  return (
    <div className='auth_container'>
    <AuthSidebar />
    <div>
        <Outlet />
    </div>
    </div>
  )
}
