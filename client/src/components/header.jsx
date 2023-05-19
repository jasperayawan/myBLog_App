import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../userContext'

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
       setUserInfo(userInfo);
      })
    })

  },[])

  const logout = async () => {
    
     const res = await fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);
  }

  const email = userInfo?.email;

  return (
    <div>
        <main className="fixed top-0 left-0 w-full z-50 px-4">
          <div className='w-full'>
            <header className="flex justify-between mb-10 max-w-[1024px] mx-auto py-5">
              <Link to="/" className="font-bold">MyBlog</Link>
              <nav className="flex justify-center items-center gap-4">
                {email && (
                  <>
                    <Link to='/create'>Create new post</Link>
                    <a href="" onClick={logout} className="bg-slate-800 rounded-md text-white px-3 py-1">logout</a>
                  </>
                )}
                
                {!email && (
                  <>
                     <Link to="/login" className="rounded-md text-slate-800 px-3 py-1">login</Link>
                     <Link to="/login" className="bg-slate-800 rounded-md text-white px-3 py-1">signup</Link>

                  </>
                )}  
              </nav>
            </header>
          </div>
        </main>
    </div>
  )
}

export default Header