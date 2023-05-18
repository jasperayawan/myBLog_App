import React from 'react'

const Header = () => {
  return (
    <div>
        <main className="p-[10px] fixed top-0 left-0 w-full">
          <header className="flex justify-between mb-10 max-w-[1024px] mx-auto">
            <a href="" className="font-bold">MyBlog</a>
            <nav className="flex gap-4">
              <a href="" className="">Login</a>
              <a href="" className="">Register</a>
            </nav>
          </header>
        </main>
    </div>
  )
}

export default Header