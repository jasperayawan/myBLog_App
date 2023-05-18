import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Layout = () => {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout