import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <div>
        <main className="fixed top-0 left-0 w-full z-50 px-4">
          <div className='w-full'>
            <header className="flex justify-between mb-10 max-w-[1024px] mx-auto py-5">
              <Link to="/" className="font-bold">MyBlog</Link>
              <nav className="flex justify-center items-center gap-4">
                <Link to="/login" className="bg-slate-800 rounded-md text-white px-3 py-1">Logout</Link>
              </nav>
            </header>
          </div>
        </main>
    </div>
  )
}

export default Header