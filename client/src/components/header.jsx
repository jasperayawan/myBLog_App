import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <main className="p-[10px] fixed top-0 left-0 w-full">
          <header className="flex justify-between mb-10 max-w-[1024px] mx-auto py-5">
            <Link to="/" className="font-bold">MyBlog</Link>
            <nav className="flex gap-4">
              <Link to="/login" className="">Login</Link>
              <Link to="/register" className="">Register</Link>
            </nav>
          </header>
        </main>
    </div>
  )
}

export default Header