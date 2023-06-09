import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import deve from '../assets/deve.png'
import { UserContext } from '../userContext';

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });

    if(res.status === 200){
      alert('successfully login');

      res.json().then(userInfo => {
        setUserInfo(userInfo);
        navigate('/');
      });

    }else{
      alert('server down!')
      navigate('/login')
    }
  }


  return (
    <div className='grid grid-cols-2 overflow-hidden'>
      <div className='mt-[3rem]'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={login}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="text-sm text-end py-2">
                  <Link to="/register" className="font-semibold text-slate-600 hover:text-slate-800">
                    Creant an account?
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div className='relative h-screen'>
      <img src={deve} alt="" className='h-full'/>
    </div>
    </div>
  )
}

export default Login