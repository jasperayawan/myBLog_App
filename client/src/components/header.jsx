import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <main className="px-[10px] fixed top-0 left-0 w-full">
          <header className="flex justify-between mb-10 max-w-[1024px] mx-auto py-5 bg-white">
            <Link to="/" className="font-bold">MyBlog</Link>
            <nav className="flex justify-center items-center gap-4">
              <Link to="/login" className="">Login</Link>
              <Link to="/register" className="bg-slate-800 rounded-md text-white px-3 py-1">Register</Link>
            </nav>
          </header>
        </main>
    </div>
  )
}

export default Header