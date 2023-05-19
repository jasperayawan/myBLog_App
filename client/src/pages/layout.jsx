import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Layout = () => {
  return (
    <main className='pt-[5rem] max-w-[1024px] mx-auto'>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout