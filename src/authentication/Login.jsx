import React, { useEffect, useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useFirebase } from '../context/firebase';

const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [navigate]);

  const signin = async (e) => {
    e.preventDefault()
    if(!email || !password) {
      alert('Please enter email and password')
      return
    }
    
    try {
     const user = await firebase.loginUserWithEmailAndPassword(email, password);
     console.log("Successfully signed in:", user);
    } catch {
      console.error("Error signing in:", error);
    }
}

  return (
    <section className="flex flex-col items-center pt-6">
      <div
        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Log in to your account
          </h1>
          <form onSubmit={signin} className="space-y-4 md:space-y-6">

            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="vogoban-jane"
              value={email} onChange={(e) => setEmail(e.target.value)} required="" />
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="tumi-jano" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" value={password} onChange={(e) => setPassword(e.target.value)} required="" />
            </div>
            <button type="submit" className="w-full text-white bg-primary hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
            <p className="text-sm font-light text-gray-500 ">Don't have an account? 
            <Link className="font-medium text-blue-600 hover:underline" to="/signup">Sign up here</Link>

            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login