import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/firebase'


const Signup = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  // States for email, password, username and file
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  
  // useEffect to check if user is logged in
  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/home");
    }
  }, [firebase, navigate]);

  // Function to create user with email, password, username and file
  const createAccount = async (e) => {
    // To prevent browser default behaviour
    e.preventDefault();
    // checking if email and password are not empty
    if (!email || !password || !username) {
      alert('Please enter all details')
      return
    }

    // implementaion of create account
    try {
      const user = await firebase.signupUserWithEmailAndPassword(email, password, username, file);
  } catch (error) {
      console.error("Error signing up:", error);
  }
  }



  // jsx for signup
  return (
    <section className="flex flex-col items-center mt-4 pt-6">
      <div
        className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create an Account
          </h1>
          <form onSubmit={createAccount} className="space-y-4 md:space-y-6">

          <div>
              <label for="username" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
              <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="diye-dao-ekta" required="" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
               <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 ">Choose profile pic</label>
              <input type="file" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="vogoban-jane" required="" onChange={(e) => setFile(e.target.files[0])} />
           </div>

           <div>
             <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="vogoban-jane" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
             <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="tumi-jano" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
             <button type="submit" className="w-full text-white  bg-blue-700 hover:bg-white hover:text-blue-700 hover:outline outline-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
            <p className="text-sm font-light text-gray-500 ">Already have an account? <Link
               className="font-medium text-blue-600 hover:underline" to="/login"> Sign in here</Link>
           </p>

          </form>
        </div>
      </div>
    </section>
    // <section className="flex flex-col items-center mt-4 pt-6">
    //   <div className="w-full bg-white rounded-lg shadow ">
    //     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //       <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Create an
    //         account
    //       </h1>
    //       <form onSubmit={createAccount} className="space-y-4 md:space-y-6">


    //         <div>
    //           <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    //           <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="vogoban-jane" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
    //         </div>
    //         <div>
    //           <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    //           <input type="password" name="password" id="password" placeholder="tumi-jano" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" value={password} onChange={(e) => setPassword(e.target.value)} />
    //         </div>
    //         <button type="submit" className="w-full text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
    //         <p className="text-sm font-light text-gray-500 ">Already have an account? <Link
    //           className="font-medium text-blue-600 hover:underline" to="/login"> Sign in here</Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Signup