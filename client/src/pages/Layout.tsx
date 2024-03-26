import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen   text-white font-['Century_Gothic'] flex flex-col">
    <Header/>
    <Outlet/> 
    <Footer/>
</div>
  )
}

export default Layout