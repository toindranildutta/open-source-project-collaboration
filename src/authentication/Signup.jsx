import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Signup = () => {
  const[email, setEmail] = React.useState('')
  const[password, setPassword] = React.useState('')


  const createAccount = (e) => {
    e.preventDefault()
    if(!email || !password) {
      alert('Please enter email and password')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });

  }


  return (
    <section className="flex flex-col items-center w-1/2 pt-6 ">
      <div className="w-full bg-white rounded-lg shadow ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Create an
            account
          </h1>
          <form onSubmit={createAccount} className="space-y-4 md:space-y-6">
            
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="vogoban-jane" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="tumi-jano" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="w-full text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
            <p className="text-sm font-light text-gray-500 ">Already have an account? <Link
              className="font-medium text-blue-600 hover:underline" to="/login"> Sign in here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signup